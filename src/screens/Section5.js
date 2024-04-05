import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';

const Section2 = ({ navigation }) => {
  const handleDivision1Press = () => {
    // Navigate to Section 5 when Division 1 is clicked
    navigation.navigate('Section7');
  };

  const handleDivision2Press = () => {
    // Navigate to Section 3 when Division 2 is clicked
    navigation.navigate('Section6');
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity onPress={handleDivision1Press} style={styles.division}>
          <Text style={styles.divisionText}>Guest</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity onPress={handleDivision2Press} style={styles.division}>
          <Text style={styles.divisionText}>Parent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Align divisions vertically
    alignItems: 'center',
  },
  section: {
    width: '60%',
    marginBottom: 20,
  },
  division: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  divisionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Section2;
