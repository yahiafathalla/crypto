import React from "react";
import { StyleSheet, Text, View, Image, FlatList,Pressable } from "react-native";
import Rankitems from "../components/RankItem";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { Auth, API, graphqlOperation, Analytics,graphql } from "aws-amplify";

const poroto = [
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaELOo6XtY4wtSsQHOCKq6b1IhshMNAMDIw&usqp=CAU",
    name: "dollar",

    valuechange: -69,
  },
  {
    id: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaELOo6XtY4wtSsQHOCKq6b1IhshMNAMDIw&usqp=CAU",

    name: "bitcoin",

    valuechange: -69,
  },
  {
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaELOo6XtY4wtSsQHOCKq6b1IhshMNAMDIw&usqp=CAU",
    name: "euro",
    valuechange: 69,
  },
  {
    id: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaELOo6XtY4wtSsQHOCKq6b1IhshMNAMDIw&usqp=CAU",
    name: "euro",
    valuechange: 69,
  },
  {
    id: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaELOo6XtY4wtSsQHOCKq6b1IhshMNAMDIw&usqp=CAU",
    name: "euro",
    valuechange: -69,
  },
  {
    id: "6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaELOo6XtY4wtSsQHOCKq6b1IhshMNAMDIw&usqp=CAU",
    name: "dollar",
    valuechange: -69,
  }
];

const Market = () => {
    const navigation = useNavigation();
      const signout = async () => {
    await Auth.signOut();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Welcome" }]
      })
    );
  };


  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        data={poroto}
        renderItem={({ item,index }) => <Rankitems rankitem={item} place={index+1} />}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image
              style={styles.image}
              source={require("../assets/images/download.jpeg")}
            />
            <Text>Rank</Text>
          </>
        )}
      />

       <Pressable onPress={signout}>
        <Text>Logout</Text>
      </Pressable>
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
    width: "120%",
    marginTop: "10%"
  }
});
