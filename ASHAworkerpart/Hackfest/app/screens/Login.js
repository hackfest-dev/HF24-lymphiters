import { StyleSheet, Text, View, Image, TextInput ,link} from 'react-native';
import React, { useState } from 'react';
import pattern from '../assets/welcome.jpg';
import logo from "../assets/logo.png";
import {errormessage, button1 } from '../common/button';

const Login = ({navigation}) => {
  const [fdata,setFdata]=useState({
    Phone_Number:'',
    Password:''
  })

  const [errormsg,setErrormsg]=useState(null);
  const backend=()=>{
    if(fdata.Phone_Number==''|| fdata.Password=='')
    {
      setErrormsg("All fields are required");
      return;
    }
    else{
      fetch('http:/10.0.2.2:3000/Login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(fdata)
      })
        .then(res=>res.json()).then(
          data=>{
            //console.log(data)
            if(data.error){
              setErrormsg(data.error);
            }
            else{
              alert('login successfull');
              navigation.navigate('Section9')
            }
          }
        )
    }
  }


  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        {/* <Text style={styles.head}>Welcome</Text> */}
        <Text style={styles.head1}>Login</Text>
        <Text style={styles.head2}>Sign in to Continue</Text>
        {errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null}
        <View style={styles.formgroup}>
          <Text style={styles.label}>Phone_Number</Text>
          <TextInput style={styles.input} 
          onPressIn={()=> setErrormsg(null)}
          onChangeText={(test)=>setFdata({... fdata,Phone_Number:test})}/>
        </View>
        <View style={styles.formgroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input}
           onPressIn={()=> setErrormsg(null)}
        secureTextEntry={true}
          onChangeText={(test)=>setFdata({... fdata,Password:test})} />
        </View>
        <View style={styles.fp}>
            <Text style={link}>Forget Password??</Text>
        </View>
            <Text style={button1}
              onPress={()=> backend ()}>Login</Text>
            <View style={styles.fp}>
            <Text style={link}>Don't have an account?
              <Text style={link}
              onPress={()=>navigation.navigate('Register')}
              >create a new acoount</Text>
            </Text>
        </View>
      </View> 
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  patternbg: {
    position: 'absolute',
    width: '100%',
    height: "100%",
    top: 0,
  },
  container1: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    top: 50,
    paddingHorizontal: 100, // Added to create space at the sides
  },
  head1: {
    fontSize: 40,
    color: 'black',
  },
  head2: {
    fontSize: 20,
    color: 'black',
    marginBottom: 100, // Added margin bottom to create space between text and label
  },
  label: {
    textAlign: 'left', // Align the label text to the left
    alignSelf: 'flex-start', // Align the label component to the left side of the container
    fontSize: 20, // Adjust font size as needed
    color: 'black', // Adjust text color as needed
    margin:10
  },
  formgroup: {
    display: 'flex'
  },
  input: {
    backgroundColor: 'white',
    width:300,
    borderRadius:20,
    padding:10,
    margin:5
  },
  fp:{
    margin:10,
    fontSize:30,
    color:'Black'
  }
 
});
