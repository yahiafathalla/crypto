import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import { BottomTabParamList } from "../types";
import Home from "../screens/HomeScreen";
import Market from "../screens/Market";
import Profile from "../screens/profile";
import Portofolio from "../screens/portofolio";
import Rank from "../screens/Rank";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="tachometer" size={24} color="black" />
          )
        }}
      />

      <BottomTab.Screen
        name="Portofolio"
        component={Portofolio}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-heart"
              size={24}
              color="black"
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Rank"
        component={Rank}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="monetization-on" size={24} color="black" />
          )
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="chart-timeline-variant"
              size={24}
              color="black"
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-profile"
              size={24}
              color="black"
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
