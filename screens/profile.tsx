import React, { useState,useContext,useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable,ActivityIndicator } from "react-native";
import Appcontext from "./utility/Appcontext";
import { getUser } from "../src/graphql/queries";

import { Auth, API, graphqlOperation, Analytics,graphql } from "aws-amplify";
import { useNavigation, CommonActions } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const [user, setuser] = useState(null);

    const { userid } = useContext(Appcontext);




const fetchuserdata=async()=>{
  try{
      const result=await API.graphql(graphqlOperation(getUser,{id:userid}))
      setuser(result.data.getUser)
      console.log(result)

    }catch(e){
      console.log(e)
    }
}
useEffect(() => {

    fetchuserdata()

}, [])

  const signout = async () => {
    await Auth.signOut();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Welcome" }]
      })
    );
  };


  if(!user){
    return <ActivityIndicator />
  }
  return (
    <View style={styles.root}>
      <Image
        style={styles.image2}
        source={require("../assets/images/download.jpeg")}
      />
      <View style={styles.container}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: user.image }} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <Text>${user.networth}</Text>
      </View>
      <Pressable onPress={signout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 200
  },

  left: { flexDirection: "row", marginRight: 90, alignItems: "center" },
  name: { fontWeight: "bold" },
  email: {
    color: "red"
  },
  image: { height: 55, width: 55, marginRight: 10, borderRadius: 25 },
  image2: {
    height: 175,
    width: "100%",
    marginTop: "10%"
  }
});
