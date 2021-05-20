import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  Button
} from "react-native";
import { Auth, Hub } from "aws-amplify";
import React, { useEffect, useContext } from "react";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { useNavigation, CommonActions } from "@react-navigation/native";
import Appcontext from "../screens/utility/Appcontext";

const Welcomscreen = () => {
  const { setuserid } = useContext(Appcontext);
  const navigation = useNavigation();
  //fetch cuurent auth user
  const fetchuser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        setuserid(user.attributes.sub);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Root" }]
          })
        );
      }
    } catch (error) {
      console.log("sdas");
    }
  };

  useEffect(() => {
    fetchuser();
  }, []);

  //update auth user
  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signIn") {
        setuserid(data.signInUserSession.accessToken.payload.sub);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Root" }]
          })
        );
      }
    });
  }, []);

  const submit = async () => {
    console.log("sd");
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google
    });
  };
  const submitfacebook = async () => {
    console.log("sd");
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook
    });
  };

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
      <Pressable style={styles.button} onPress={submit}>
        <Image
          style={styles.imageofsignin}
          source={require("../assets/images/signin.png")}
        />
      </Pressable>
      <Pressable style={styles.button} onPress={submitfacebook}>
        <Image
          style={styles.imageofsignin}
          source={require("../assets/images/facebook2.png")}
        />
      </Pressable>
    </View>
  );
};

export default Welcomscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  image: {
    height: 280,
    width: "80%",
    marginTop: 40,
    resizeMode: "contain"
  },
  innercontainer: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  text1: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold"
  },
  text2: { fontSize: 20 },
  imageofsignin: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 300,
    marginTop: "auto"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 50,
    marginTop: 20
  }
});
