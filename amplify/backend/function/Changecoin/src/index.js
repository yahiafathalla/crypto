/* Amplify Params - DO NOT EDIT
	API_EXCHANGECOINS_GRAPHQLAPIENDPOINTOUTPUT
	API_EXCHANGECOINS_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { DynamoDB } = require("aws-sdk");
const ddb = new DynamoDB();

//
const getcoinamount = async (coinsofportofolioncoinid, Userid) => {
  const params = {
    Key: {
      id: { S: coinsofportofolioncoinid }
    },
    TableName: process.env.PortofoliocoinTable
  };
  const getcoinsdata = await ddb.getItem(params).promise();
  console.log("getslllllllecoins", getcoinsdata);
  if (
    getcoinsdata &&
    getcoinsdata.Item &&
    getcoinsdata.Item.amount &&
    getcoinsdata.Item.amount.N
  ) {
    return parseFloat(getcoinsdata.Item.amount.N);
  }
  return 0;
};

const getegyamount = async (egyportofoliocoinid, userid) => {
  const params = {
    Key: {
      id: { S: egyportofoliocoinid }
    },
    TableName: process.env.PortofoliocoinTable
  };
  const getcoinsdata = await ddb.getItem(params).promise();
  console.log("getEGYPTIANcoinsdata", getcoinsdata);
  if (
    getcoinsdata &&
    getcoinsdata.Item &&
    getcoinsdata.Item.amount &&
    getcoinsdata.Item.amount.N
  ) {
    return parseFloat(getcoinsdata.Item.amount.N);
  }
  return 0;
};

const getcoins = async coinid => {
  const params = {
    Key: {
      id: { S: coinid }
    },
    TableName: process.env.Coins_TABLE
  };
  const getcoinsdata = await ddb.getItem(params).promise();
  console.log("getcoins", getcoinsdata);
  return getcoinsdata;
};
// srt

const canbuycoins = (coins, amounttobuy, egyamount) => {
  return egyamount >= coins.Item.cuurentprice.N * amounttobuy;
};

const cansellcoins = (amounttosell, portofolioamont) => {
  return portofolioamont >= amounttosell;
};

//buycoins

const buyCoin = async (
  coin,
  amounttobuy,
  egyportofoliocoinid,
  egyamount,
  coinAmount,
  userid
) => {
  // decrease USD
  const date = new Date();

  const newegymount =
    egyamount - parseFloat(coin.Item.cuurentprice.N) * amounttobuy;
  const params = {
    Item: {
      id: { S: egyportofoliocoinid },
      __typename: { S: "Portofoliocoin" },
      createdAt: { S: date.toISOString() },
      updatedAt: { S: date.toISOString() },
      Userid: { S: userid },
      Coinid: { S: process.env.EGY_COIN_ID },
      amount: { N: newegymount.toString() }
    },
    TableName: process.env.PortofoliocoinTable
  };
  await ddb.putItem(params).promise();

  // ADD new portfolio coin, or update the existing one
  const newCoinAmount = coinAmount + amounttobuy;

  const params1 = {
    Item: {
      id: { S: `egy{userid}-egy{coin.Item.symbol.S}` },
      __typename: { S: "Portofoliocoin" },
      createdAt: { S: date.toISOString() },
      updatedAt: { S: date.toISOString() },
      Userid: { S: userid },
      Coinid: { S: coin.Item.id.S },
      amount: { N: newCoinAmount.toString() }
    },
    TableName: process.env.PortofoliocoinTable
  };
  await ddb.putItem(params1).promise();
};

//sellcoins
const sellcoins = async (
  coin,
  amounttosell,
  egyportofoliocoinid,
  egyamount,
  coinAmount,
  userid
) => {
  const date = new Date();

  const newegymount =
    egyamount + parseFloat(coin.Item.cuurentprice.N) * amounttosell;
  const params = {
    Item: {
      id: { S: egyportofoliocoinid },
      __typename: { S: "Portofoliocoin" },
      createdAt: { S: date.toISOString() },
      updatedAt: { S: date.toISOString() },
      Userid: { S: userid },
      Coinid: { S: process.env.EGY_COIN_ID },
      amount: { N: newegymount.toString() }
    },
    TableName: process.env.PortofoliocoinTable
  };
  await ddb.putItem(params).promise();

  // ADD new portfolio coin, or update the existing one
  const newCoinAmount = coinAmount - amounttosell;
  const params1 = {
    Item: {
      id: { S: `${userid}-${coin.Item.symbol.S}` },
      __typename: { S: "Portofoliocoin" },
      createdAt: { S: date.toISOString() },
      updatedAt: { S: date.toISOString() },
      Userid: { S: userid },
      Coinid: { S: coin.Item.id.S },
      amount: { N: newCoinAmount.toString() }
    },
    TableName: process.env.PortofoliocoinTable
  };
  await ddb.putItem(params1).promise();
};

/**
 * Using this as the entry point, you can use a single function to handle many resolvers.
 */
const resolvers = {
  Mutation: {
    chagecoins: async ctx => {
      console.log("ctx", ctx);
      const {
        Coinid,
        isbuy,
        amount,
        egyportofoliocoinid,
        coinsofportofolioncoinid
      } = ctx.arguments;
      const userid = ctx.identity.sub;

      const egyamont = !egyportofoliocoinid
        ? 0
        : await getegyamount(egyportofoliocoinid, userid);
      const coinAmount = !coinsofportofolioncoinid
        ? 0
        : await getcoinamount(coinsofportofolioncoinid, userid);
      const coin = await getcoins(Coinid);

      try {
        if (isbuy && canbuycoins(coin, amount, egyamont)) {
          await buyCoin(
            coin,
            amount,
            egyportofoliocoinid,
            egyamont,
            coinAmount,
            userid
          );
        } else if (!isbuy && cansellcoins(amount, coinAmount)) {
          await sellcoins(
            coin,
            amount,
            egyportofoliocoinid,
            egyamont,
            coinAmount,
            userid
          );
        } else {
          throw new Error(
            isbuy ? `Not enough egy` : "Not enough coins to sell"
          );
        }
      } catch (e) {
        console.log(e);
      }

      return true;
    }
  }
};
// event
// {
//   "typeName": "Query", /* Filled dynamically based on @function usage location */
//   "fieldName": "me", /* Filled dynamically based on @function usage location */
//   "arguments": { /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }
exports.handler = async event => {
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
};
