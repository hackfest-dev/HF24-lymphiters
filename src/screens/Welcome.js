import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import pattern  from '../../assets/welcome.jpg';

import logo from '../../assets/welcome.jpg';
import { button1 } from '../common/button'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern}/>
        <View style={styles.container1}>
        {/*<Text style={styles.head}>Welcome</Text>*/}
        <Image style={styles.logo} source={logo}/>
        <Text style={button1}
        onPress={()=>navigation.navigate('Login')}
        >Login</Text>
        <Text style={button1}
        onPress={()=>navigation.navigate('Register')}
        >Register</Text>
        </View>
    </View>
  )
}
export default Welcome

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%"
    },
    patternbg:{
        position:'absolute',
        width:'100%',
        height:"100%",
        top:0,
    },
    head:{
        fontSize:30,
        color:'#fff',
        alignContent:'center'
    },
    container1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
   
})