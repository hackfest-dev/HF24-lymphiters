import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Define an array of vaccination data
const vaccinations = [
    {
      name: 'BCG',
      image: require('../../assets/image1.png'),
      info: 'Bacillus Calmette-Guérin vaccine, administered at birth, protects against tuberculosis.',
    },
    {
      name: 'OPV',
      image: require('../../assets/image1.png'),
      info: 'Oral Polio Vaccine, given at birth and in subsequent doses, prevents polio.',
    },
    {
      name: 'Hepatitis-B',
      image: require('../../assets/image1.png'),
      info: 'Hepatitis-B vaccine, administered at birth, protects against hepatitis B virus infection.',
    },
    {
      name: 'OPV1',
      image: require('../../assets/image1.png'),
      info: 'Oral Polio Vaccine 1, administered at 6 weeks, part of the polio vaccination series, provides immunity against poliovirus infection.',
    },
    {
      name: 'Penta-1 (DPT+Hep-B+Hib)',
      image: require('../../assets/image1.png'),
      info: 'Penta-1 (DPT+Hep-B+Hib), administered at 6 weeks, combined vaccine protecting against diphtheria, pertussis, tetanus, hepatitis B, and Haemophilus influenzae type b (Hib), helps prevent serious infections and diseases caused by these pathogens.',
    },
    {
      name: 'IPV-1',
      image: require('../../assets/image1.png'),
      info: 'Inactivated Poliovirus Vaccine 1, administered at 6 weeks, part of the polio vaccination series, provides immunity against poliovirus infection.',
    },
    {
      name: 'Rota-1',
      image: require('../../assets/image1.png'),
      info: 'Rotavirus Vaccine 1, administered at 6 weeks, protects against rotavirus infection, a common cause of severe diarrhea in infants, helps prevent dehydration and other complications associated with rotavirus gastroenteritis.',
    },
    {
      name: 'PCV-1',
      image: require('../../assets/image1.png'),
      info: 'Pneumococcal Conjugate Vaccine 1, administered at 6 weeks, protects against diseases caused by Streptococcus pneumoniae bacteria, including pneumonia and meningitis, reduces the risk of severe pneumococcal infections in infants and young children.',
    },
    {
      name: 'OPV-2',
      image: require('../../assets/image1.png'),
      info: 'Oral Polio Vaccine 2, administered at 10 weeks, part of the polio vaccination series, provides additional immunity against poliovirus infection.',
    },
    {
      name: 'Penta-2 (DPT+Hep-B+Hib)',
      image: require('../../assets/image1.png'),
      info: 'Penta-2 (DPT+Hep-B+Hib), administered at 10 weeks, combined vaccine protecting against diphtheria, pertussis, tetanus, hepatitis B, and Haemophilus influenzae type b (Hib), boosts immunity against these diseases, ensuring continued protection.',
    },
    {
      name: 'Rota-2',
      image: require('../../assets/image1.png'),
      info: 'Rotavirus Vaccine 2, administered at 10 weeks, provides additional protection against rotavirus infection, strengthens immunity against rotavirus-related illnesses.',
    },
    {
      name: 'OPV-3',
      image: require('../../assets/image1.png'),
      info: 'Oral Polio Vaccine 3, administered at 14 weeks, part of the polio vaccination series, provides further immunity against poliovirus infection.',
    },
    {
      name: 'Penta-3 (DPT+Hep-B+Hib)',
      image: require('../../assets/image1.png'),
      info: 'Penta-3 (DPT+Hep-B+Hib), administered at 14 weeks, final dose of the combined vaccine protecting against diphtheria, pertussis, tetanus, hepatitis B, and Haemophilus influenzae type b (Hib), completes the primary immunization schedule for these diseases.',
    },
    {
      name: 'IPV-2',
      image: require('../../assets/image2.jpg'),
      info: 'Inactivated Poliovirus Vaccine 2, administered at 14 weeks, additional dose of the inactivated poliovirus vaccine, enhances immunity against poliovirus infection.',
    },
    {
      name: 'Rota-3',
      image: require('../../assets/image2.jpg'),
      info: 'Rotavirus Vaccine 3, administered at 14 weeks, final dose of the rotavirus vaccine series, provides full protection against rotavirus infection.',
    },
    {
      name: 'PCV-2',
      image: require('../../assets/image2.jpg'),
      info: 'Pneumococcal Conjugate Vaccine 2, administered at 14 weeks, second dose of the pneumococcal conjugate vaccine, reinforces immunity against pneumococcal diseases.',
    },
    {
      name: 'Measles Rubella-1',
      image: require('../../assets/image2.jpg'),
      info: 'Measles Rubella-1, administered at 9 months, protects against measles and rubella (German measles), reduces the risk of complications and outbreaks of these highly contagious viral infections.',
    },
    {
      name: 'JE-1',
      image: require('../../assets/image2.jpg'),
      info: 'Japanese Encephalitis Vaccine 1, administered at 9 months, prevents Japanese encephalitis virus infection transmitted by mosquitoes, recommended for individuals living in or traveling to areas where Japanese encephalitis is endemic.',
    },
    {
      name: 'IPV-3',
      image: require('../../assets/image2.jpg'),
      info: 'Inactivated Poliovirus Vaccine 3, administered at 9 months, final dose of the inactivated poliovirus vaccine series, provides long-lasting immunity against poliovirus infection.',
    },
    {
      name: 'Vitamin A',
      image: require('../../assets/image2.jpg'),
      info: 'Vitamin A supplementation, provided at 9 months, boosts immunity and supports overall health, essential for vision, immune function, and cellular growth.',
    },
    {
      name: 'PCV Booster',
      image: require('../../assets/image2.jpg'),
     
    }
]

const VaccinationPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {vaccinations.map((vaccine, index) => (
        <View key={index} style={styles.vaccineContainer}>
          <Image source={vaccine.image} style={styles.image} />
          <Text style={styles.name}>{vaccine.name}</Text>
          <Text style={styles.info}>{vaccine.info}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  vaccineContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default VaccinationPage;
