import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator
} from "react-native";
import Valuechange from "../components/Valuechange";
import Coinchart from "../components/Coinchart";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getCoins, listPortofoliocoins } from "../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import Appcontext from "./utility/Appcontext";

const Coinsscreen = () => {
  const [coins, setcoins] = useState();
  const [portofoliocoins, setportofoliocoins] = useState();
  const { userid } = useContext(Appcontext);

  const data = JSON.stringify([
    47222.9831719397,
    47434.65047738381,
    47607.369136516856,
    47074.35527848516,
    46786.501689765224,
    47499.27660080816,
    47815.96175554316,
    48012.57846110786,
    48216.13437588234
  ]);

  const navigation = useNavigation();
  const route = useRoute();
  const onbuy = () => {
    navigation.navigate("Coinexhange", { isbuy: true, coins, portofoliocoins });
  };
  const onsell = () => {
    navigation.navigate("Coinexhange", {
      isbuy: false,
      coins,
      portofoliocoins
    });
  };

  const fetchcoindata = async () => {
    if (!route.params?.id) {
      return;
    }
    try {
      const response = await API.graphql(
        graphqlOperation(getCoins, { id: route.params.id })
      );
      setcoins(response.data.getCoins);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //list of coins that used by each auth user
  const fetchportofoliocoins = async () => {
    if (!route.params?.id) {
      return;
    }
    try {
      const response = await API.graphql(
        graphqlOperation(listPortofoliocoins, {
          filter: {
            and: {
              Userid: { eq: userid },
              Coinid: { eq: route.params?.id }
            }
          }
        })
      );
      //nfhm
      if (response.data.listPortofoliocoins.items.length > 0) {
        setportofoliocoins(response.data.listPortofoliocoins.items[0]);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchcoindata();
    fetchportofoliocoins();
  }, []);

  if (!coins) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: coins.image }} />
          <View>
            <Text style={styles.name}>{coins.name}</Text>

            <Text>{coins.symbol}</Text>
          </View>
        </View>
      </View>
      <View style={styles.coinscontainer}>
        <View>
          <Text>CurrentPrice</Text>
          <Valuechange style value={coins.cuurentprice} />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 170,
            justifyContent: "space-between"
          }}
        >
          <View>
            <Text>1 hour</Text>
            <Valuechange style value={coins.valuechange1h} />
          </View>
          <View>
            <Text>1 days</Text>
            <Valuechange style value={coins.valuechange1d} />
          </View>
          <View>
            <Text>7 days</Text>
            <Valuechange style value={coins.valuechange7d} />
          </View>
        </View>
      </View>
      {coins?.pricehistorystring && (
        <Coinchart coinsdata={coins.pricehistorystring} />
      )}
      <View style={styles.data}>
        <Text>Positon</Text>
        <Text>
          {coins.symbol} {portofoliocoins?.amount || 0}{" "}
          {(portofoliocoins?.amount || 0) * coins.cuurentprice}
        </Text>
      </View>

      <View style={styles.buttoncontainer}>
        <Pressable
          style={[styles.Button, { backgroundColor: "blue" }]}
          onPress={onbuy}
        >
          <Text style={styles.textofbutton}>BUY</Text>
        </Pressable>
        <Pressable
          style={[styles.Button, { backgroundColor: "red" }]}
          onPress={onsell}
        >
          <Text style={styles.textofbutton}>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Coinsscreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  coinscontainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  left: { flexDirection: "row", marginRight: 90, alignItems: "center" },
  name: { fontWeight: "bold", fontSize: 20 },
  image: {
    height: 45,
    width: 55,
    marginTop: "10%",
    borderRadius:20,
    marginRight:10
  },
  data: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  buttoncontainer: {
    flexDirection: "row",
    marginTop: "auto"
  },
  Button: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
    height: 50,
    borderRadius: 50,
    alignItems: "center"
  },
  textofbutton: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  }
});
