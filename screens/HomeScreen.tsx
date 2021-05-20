import { StyleSheet, Text, View, Image } from "react-native";

import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/get-free-money-fast-scaled.webp")}
      />
      <View style={styles.innercontainer}>
        <Text style={styles.text1}>Welcome</Text>
        <Text style={styles.text2}>GO AND PLAY</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  image: {
    height: 280,
    width: "100%",
    marginTop: 100,
    resizeMode: "contain"
  },
  innercontainer: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  text1: {
    color: "red",
    fontSize:80,
    fontWeight: "bold"
  },
  text2: { fontSize: 20 }
});
