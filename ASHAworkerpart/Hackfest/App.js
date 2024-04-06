import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Welcome from './app/screens/Welcome';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import Section9 from './app/screens/Section9';

import Section11 from './app/screens/Section11';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator();
export default function App(){
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={Welcome}
          options={
            {
              headerShown:false
            }
          }/>
          <Stack.Screen name='Login' component={Login}
          options={
            {
              headerShown:false
            }
          }/>
          <Stack.Screen name='Register' component={Register}
          options={
            {
              headerShown:false
            }
          }/>
          <Stack.Screen name='Section9' component={Section9}
          options={
            {
              headerShown:false
            }
          }/>
          <Stack.Screen name='Section11' component={Section11}
          options={
            {
              headerShown:false
            }
          }/>
        </Stack.Navigator>
      </NavigationContainer>
      
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
})