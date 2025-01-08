import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IntroductionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoang Manh Tuong - 22110262</Text>
      <Text style={styles.text}>🌟 Tuổi: 21</Text>
      <Text style={styles.text}>📚 Ngành học: Công nghệ thông tin</Text>
      <Text style={styles.text}>  Môn:  Lập trình di động nang cao</Text>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
    textAlign: 'center',
  },
});
