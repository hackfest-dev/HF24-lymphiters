import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import image1 from '../../assets/image1.png';

import image2 from '../../assets/image2.jpg';


const Section2 = ({ navigation }) => {
  const handleDivision1Press = () => {
    // Navigate to Section 5 when Division 1 is clicked
    navigation.navigate('Section5');
  };

  const handleDivision2Press = () => {
    // Navigate to Section 3 when Division 2 is clicked
    navigation.navigate('Section3');
  };

  const handleEmergencyButtonClick = () => {
    // Implement emergency button functionality here
    console.log('Emergency button clicked');
  };

  return (
    <View style={styles.container}>
      <View ></View>
      <View style={styles.section}>
        <TouchableOpacity onPress={handleDivision1Press} style={styles.division}>
        <Image
  source={image1}
  style={styles.image}
/>

          <Text style={styles.divisionText}>VAccination</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity onPress={handleDivision2Press} style={styles.division}>
        <Image
  source={image2}
  style={styles.image}
/>

          <Text style={styles.divisionText}>Food</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleEmergencyButtonClick} style={styles.emergencyButton}>
        <Text style={styles.emergencyButtonText}>Emergency</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  section: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  division: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  divisionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emergencyButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  emergencyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Section2;
