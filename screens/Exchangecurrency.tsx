import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Pressable
} from "react-native";
import { Route, useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import { chagecoins } from "../components/newqueieres/mutations";
import { getCoins, listPortofoliocoins } from "../src/graphql/queries";

import Appcontext from "./utility/Appcontext";
import { useNavigation } from "@react-navigation/native";

const egy_coin_id = "edad0b66-ea0b-4625-87cf-96b99cd588e7";

const Exchangecurrency = () => {
  const { userid } = useContext(Appcontext);
  const navigation = useNavigation();
  const checkamount = () => {
    //if there is no amount and no zero writte set empty on both else set coinegy
    const priceofcoin = parseFloat(amountofcurrency);
    if (!priceofcoin && priceofcoin !== 0) {
      setamountofcurrency("");
      setcoinegy("");
      return;
    }
    setcoinegy((priceofcoin * coins.cuurentprice).toString());
  };

  const checkegyamont = () => {
    //if there is no amount and no zero writte set empty on both else set coinegy
    const priceofcoin = parseFloat(coinegy);
    if (!priceofcoin && priceofcoin !== 0) {
      setamountofcurrency("");
      setcoinegy("");
      return;
    }
    setamountofcurrency((priceofcoin / coins.cuurentprice).toString());
  };
  const route = useRoute();
  const { isbuy, coins } = route.params;
  const portofoliocoins = route?.params?.portofoliocoins;
  const max = 100000;
  const [amountofcurrency, setamountofcurrency] = useState("");
  const [coinegy, setcoinegy] = useState("");

  const getportofoilocoinid = async (coinid: string) => {
    try {
      const response = await API.graphql(
        graphqlOperation(listPortofoliocoins, {
          filter: {
            and: {
              Userid: { eq: userid },
              Coinid: { eq: coinid }
            }
          }
        })
      );
      //nfhm
      if (response.data.listPortofoliocoins.items.length > 0) {
        return response.data.listPortofoliocoins.items[0].id;
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const placeorder = async () => {
    try {
      const response = await API.graphql(
        graphqlOperation(chagecoins, {
          Coinid: coins.id,
          isbuy,
          amount: parseFloat(amountofcurrency),
          egyportofoliocoinid: await getportofoilocoinid(egy_coin_id),
          coinsofportofolioncoinid: await getportofoilocoinid(coins.id)
        })
      );
      if (response.data.chagecoins) {
        navigation.navigate("Portofolio");
      } else {
        Alert.alert("error", "there was error");
      }
    } catch (error) {
      Alert.alert("error", "there was error");
      console.log(error);
    }
  };

  const submit = async () => {
    if (isbuy && parseFloat(coinegy) > max) {
      Alert.alert("err", "not allow to use more than max egycoins");
      return;
    }
    if (
      !isbuy &&
      (!portofoliocoins ||
        parseFloat(amountofcurrency) > portofoliocoins.amount)
    ) {
      Alert.alert(
        "err",
        `not enogh ${coins.symbol} coins max:${portofoliocoins?.amount || 0}`
      );
    }
    await placeorder();
  };
  useEffect(() => {
    checkamount();
  }, [amountofcurrency]);

  useEffect(() => {
    checkegyamont();
  }, [coinegy]);
  return (
    <View style={styles.root}>
      <Text style={styles.text1}>
        {isbuy ? "Buy" : "Sell"} {coins.symbol}
      </Text>
      <Image
        style={styles.image}
        source={require("../assets/images/money.jpeg")}
      />
      <View style={styles.innercontainer}>
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder="0"
            keyboardType="numeric"
            value={amountofcurrency}
            onChangeText={setamountofcurrency}
          />
          <Text>{coins.symbol}</Text>
        </View>
        <Text> = </Text>
        <View style={styles.inputcontainer}>
          <TextInput
            keyboardType="numeric"
            placeholder="0"
            value={coinegy}
            onChangeText={setcoinegy}
          />
          <Text>Egy</Text>
        </View>
      </View>
      <Pressable style={styles.btn} onPress={submit}>
        <Text style={styles.texto}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default Exchangecurrency;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    marginTop: 20,
    flex: 1,
    backgroundColor: "white"
  },
  text1: { fontWeight: "bold", fontSize: 20 },
  image: {
    width: 400,
    resizeMode: "contain"
  },
  innercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center"
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "green",
    flex: 1,
    height: 50,
    alignItems: "center",
    marginTop: 10
  },
  btn: {
    backgroundColor: "red",
    color: "red",
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 50
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold"
  }
});
