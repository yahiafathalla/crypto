import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { withAuthenticator, withOAuth } from "aws-amplify-react-native";
import { Auth, API, graphqlOperation, Analytics } from "aws-amplify";
import { Platform } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Amplify from "aws-amplify";
import config from "./src/aws-exports.js";
import Appcontext from "./screens/utility/Appcontext";

Amplify.configure(config);

function App() {
  const [userid, setuserid] = useState();
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Appcontext.Provider value={{ userid, setuserid }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Appcontext.Provider>
      </SafeAreaProvider>
    );
  }
}
export default App;
