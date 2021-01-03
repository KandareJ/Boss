import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Widget from './Widget';

const weight = 190;
const height = 100;
const protein = 5;
const fat = 5;
const carbs = 5;
const calories = 2000;
const water = 2.00;

const DietOverview = () => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Diet Overview</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Weight: {weight}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Calories: {calories}</Text>
          </View>
        </View>
      </View>
      <View style={styles.widgets}>
        <Widget name='Proteins' number={protein} />
        <Widget name='Fats' number={fat} />
        <Widget name='Carbs' number={carbs} />
        <Widget name='Water' number={water} />
      </View>
    </View>
  );
};

export default DietOverview;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .4,
    borderRadius: 10
  },
  widgets: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textContainer: {
    width: '40%',
    alignItems:'center'
  },
  text: {
    fontSize: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 25
  },
});
