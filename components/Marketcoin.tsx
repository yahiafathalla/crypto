import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Valuechange from "./Valuechange";
import { useNavigation } from "@react-navigation/core";

export interface Marketcoinstypes {
  marketcoin: {
    id: string;
    image: string;
    name: string;
    symbol: string;
    cuurentprice: Number;
    valuechange1d: Number;
  };
}
const marketcoins = (props: Marketcoinstypes) => {
  const navigation = useNavigation();

  const {
    marketcoin: { image, name, symbol, cuurentprice, valuechange1d, id }
  } = props;

  return (
    <Pressable onPress={() => navigation.navigate("coins", { id })}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: image }} />
          <View>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.subname}>{symbol}</Text>
          </View>
        </View>
        <View>
          <Text>${cuurentprice}</Text>
          <Valuechange style value={valuechange1d} />
        </View>
      </View>
    </Pressable>
  );
};

export default marketcoins;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    margin: 10,
    alignItems: "center"
  },
  left: { flexDirection: "row", marginRight: 90, alignItems: "center" },
  name: { fontWeight: "bold" },
  subname: {},
  image: { height: 55, width: 55, marginRight: 10, borderRadius: 25 }
});
