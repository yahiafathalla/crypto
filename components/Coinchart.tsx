import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import {
  BarChart,
  LineChart,
  ProgressChart,
  StackedBarChart
} from "react-native-chart-kit";

export interface coinsdataprops {
  coinsdata: string;
}
const Coinchart = ({ coinsdata }: coinsdataprops) => {
  const data = JSON.parse(coinsdata);
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data
            }
          ]
        }}
        verticalLabelRotation={30}
        width={Dimensions.get("window").width - 39}
        height={220}
        yAxisLabel={"$"}
        withInnerLines={false}
        chartConfig={{
          backgroundColor: "#10c9bd",
          backgroundGradientFrom: "#f2b40a",
          backgroundGradientTo: "#99f7e3",
          strokeWidth: 2,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "1",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
      />
    </View>
  );
};

export default Coinchart;

const styles = StyleSheet.create({
  container: {}
});
