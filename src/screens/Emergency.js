import React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';

const App = () => {
  const sendEmergencySMS = () => {
    axios.post('http://10.0.2.2:3000/', {
      to: 'RECIPIENT_PHONE_NUMBER',
      message: 'Emergency! Help needed!',
    })
    .then((response) => {
      console.log(response.data);
      // Handle success
    })
    .catch((error) => {
      console.error(error);
      // Handle error
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Emergency" onPress={sendEmergencySMS} />
    </View>
  );
};

export default App;
