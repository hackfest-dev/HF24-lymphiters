import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login1 from './src/screens/Login1'; // Assuming your login component is named Login1
import Section2 from './src/screens/Section2';
import Section5 from './src/screens/Section5';
import Section7 from './src/screens/Section7';
import Welcome from './src/screens/Welcome';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name='Section5'
          component={Section5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Login1'
          component={Login1}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name='Section2'
          component={Section2}
          options={{
            headerShown: false
          }}
        />
        
         <Stack.Screen
          name='Section7'
          component={Section7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
