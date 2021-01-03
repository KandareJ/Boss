import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Button from './Button';

const CreateItem = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} placeholder='Apple' />
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Fat (grams):</Text>
        <TextInput style={styles.input} placeholder='0.2' keyboardType='numeric'/>
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Protein (grams):</Text>
        <TextInput style={styles.input} placeholder='0.3' keyboardType='numeric'/>
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Carbs (grams):</Text>
        <TextInput style={styles.input} placeholder='13.8' keyboardType='numeric'/>
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Servings:</Text>
        <TextInput style={styles.input} placeholder='1' keyboardType='numeric'/>
      </View>
      <Button title='Done' />
    </View>
  );
};

export default CreateItem;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10
  },
  input: {
    fontSize: 20,
    flex: 1
  },
  inputSection: {
    flexDirection: 'row',
    marginBottom: 20
  }
});
