
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens.js/Login';
import HomeScreen from "./screens.js/Home"

const Stack = createNativeStackNavigator();


export default function App({navigation}) {
  return (
    

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80ffdb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper:{
    position:"absolute",
    top:100,
    left:100
  }
});
