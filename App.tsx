/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren, useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login"
import ListPage from "./screens/ListPage"
import CreateList from "./screens/CreateList";
import SignUpScreen from "./screens/SignUp"
import ShowDeviceInfo from "./screens/ShowDeviceInfo";


const App = () => {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <NavigationContainer>
    {
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListPage" component={ListPage} />
          {/* <Stack.Screen name="CreateList" component={CreateList} />
          <Stack.Screen name="ShowDeviceInfo" component={ShowDeviceInfo} /> */}
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      }
  </NavigationContainer>
  );
};



export default App;
