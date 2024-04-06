import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import pattern from '../assets/welcome.jpg';
import { errorMessage, button1 } from '../common/button';

const Register = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    Username: '',
    Phone_Number: '',
    Email: '',
    Password: '',
    Conform_Password: '',
  });

  const [errormsg, setErrormsg] = useState(null);

  const SendToBackend = () => {
    if (
      fdata.Username === '' ||
      fdata.Phone_Number === '' ||
      fdata.Email === '' ||
      fdata.Password === '' ||
      fdata.Conform_Password === ''
    ) {
      setErrormsg('All fields are required');
      return;
    } else if (fdata.Password !== fdata.Conform_Password) {
      setErrormsg('Password and Confirm Password must be the same');
      return;
    }

    fetch('http://10.0.2.2:3000/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrormsg(data.error);
        } else {
          alert('Account created successfully');
          navigation.navigate('Login');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrormsg('An error occurred while processing your request.');
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        <Text style={styles.head1}>Register</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already Registered? Login</Text>
        </TouchableOpacity>
        {errormsg && <Text style={styles.errormessage}>{errormsg}</Text>}
        <View style={styles.formgroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFdata({ ...fdata, Username: text })}
          />
        </View>
        <View style={styles.formgroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFdata({ ...fdata, Phone_Number: text })}
          />
        </View>
        <View style={styles.formgroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFdata({ ...fdata, Email: text })}
          />
        </View>
        <View style={styles.formgroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setFdata({ ...fdata, Password: text })}
          />
        </View>
        <View style={styles.formgroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setFdata({ ...fdata, Conform_Password: text })}
          />
        </View>
        <TouchableOpacity style={styles.button1} onPress={SendToBackend}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  patternbg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  head1: {
    fontSize: 40,
    color: 'black',
    marginBottom: 20,
  },
  linkText: {
    color: 'blue',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  formgroup: {
    marginBottom: 15,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  button1: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});
