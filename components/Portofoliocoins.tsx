import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
export interface Portofoliocoinstypes {
  portofoliocoin: {
    amount: Number,
    coin:{
      id: string,
      image: string,
      name: string,
      symbol: string,
      cuurentprice: Number;}

  };
}

const Portofoliocoins = (props: Portofoliocoinstypes) => {
  const navigation = useNavigation();

  const {
    portofoliocoin: { amount,coin:{ id, image, name, symbol,cuurentprice}  }
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
          <Text>
            {symbol}
            {amount}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Portofoliocoins;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    height: "30%",
    margin: 10,
    alignItems: "center"
  },
  left: { flexDirection: "row", marginRight: 90, alignItems: "center" },
  name: { fontWeight: "bold" },
  subname: {},
  image: { height: 55, width: 55, marginRight: 10, borderRadius: 25}
});
