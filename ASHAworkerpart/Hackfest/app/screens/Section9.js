import React, { useState, useEffect } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Home screen component
const HomeScreen = ({ navigation }) => {
  const [registerNumber, setRegisterNumber] = useState('');

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      navigateToSection11();
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const navigateToSection11 = () => {
    if (registerNumber.trim() !== '') {
      // If the register number is not empty, navigate to Section 11
      navigation.navigate('Section11', { registerNumber });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Enter Register Number"
        onChangeText={text => setRegisterNumber(text)}
        value={registerNumber}
        onSubmitEditing={navigateToSection11} // Handle Enter key press
      />
    </View>
  );
};

// Stack Navigator
const Stack = createStackNavigator();

export default HomeScreen;
