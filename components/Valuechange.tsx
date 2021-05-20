import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface coiinstype {
  value: Number;
  style: Object;
}
const Valuechange = ({ value, style = {} }: coiinstype) => {
  return (
    <Text style={[style, { color: value > 0 ? "blue" : "red" }]}>
      {value > 0 && "+"}
      {value}
    </Text>
  );
};

export default Valuechange;

const styles = StyleSheet.create({});
