import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export interface Rankitem {
  rankitem: {
    image: string;
    name: string;
    valuechange: Number;
  },
  place:Number
}

const Rankitems = (props: Rankitem) => {
  const {
    rankitem: { image, name,  valuechange }
  ,place} = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
      <Text>{place}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>

        </View>
      </View>
        <Text >
          ${valuechange}
        </Text>

    </View>
  );
};

export default Rankitems;

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
