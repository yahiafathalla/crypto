import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Marketcoin from "../components/Marketcoin";
import { listCoinss } from "../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
const Market = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const fetchcoins = async () => {
    setloading(true);
    try {
      const response = await API.graphql(graphqlOperation(listCoinss));
      setcoins(response.data.listCoinss.items);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  useEffect(() => {
    fetchcoins();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={fetchcoins}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        data={coins}
        renderItem={({ item }) => <Marketcoin marketcoin={item} />}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image
              style={styles.image}
              source={require("../assets/images/invest.jpeg")}
            />
            <Text>market</Text>
          </>
        )}
      />
    </View>
  );
};

export default Market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 50
  },

  image: {
    height: 175,
    width: "100%",
    marginTop: "10%"
  }
});
