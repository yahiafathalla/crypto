import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Potofoliocoin from "../components/Portofoliocoins";
import { API, graphqlOperation } from "aws-amplify";
import { getUserportofolio } from "../components/newqueieres/queries";
import Appcontext from "./utility/Appcontext";

const portofolio = () => {
  const [loading, setloading] = useState(false);
  const [balance, setbalace] = useState(0);
  const [portofoliocoins, setportofoliocoin] = useState([]);
  const { userid } = useContext(Appcontext);
  const fetchportofoliocoins = async () => {
    setloading(true);
    try {
      const result = await API.graphql(
        graphqlOperation(getUserportofolio, {
          id: userid
        })
      );
      console.log(result.data.getUser);
      setbalace(result.data.getUser.networth);
      setportofoliocoin(result.data.getUser.portofolliocoins.items);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchportofoliocoins();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        data={portofoliocoins}
        onRefresh={fetchportofoliocoins}
        refreshing={loading}
        renderItem={({ item }) => <Potofoliocoin portofoliocoin={item} />}
        ListHeaderComponent={() => (
          <>
            <Image
              style={styles.image}
              source={require("../assets/images/na-what-is-a-money-market-account.jpg")}
            />
            <View>
              <Text> ${balance} </Text>
            </View>
          </>
        )}
        ListHeaderComponentStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default portofolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 50
  },

  image: {
    height: 175,
    width: "120%",
    marginTop: "10%"
  }
});
