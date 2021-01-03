import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Widget from './Widget';
import WeightEdit from './WeightEdit';
import FoodItem from './FoodItem';
import Button from './Button';

const DietFull = ({ navigation }) => {
  const weight = 190;
  const height = 100;
  const protein = 5;
  const fat = 5;
  const carbs = 5;
  const calories = 2000;
  const water = 2.00;
  const width = '20%';

  return (
    <View style={styles.bg}>
      <View style={styles.top}>
        <View style={styles.topStats}>
          <Text>Calories: {calories}</Text>
          <WeightEdit weight={weight}/>
        </View>
        <View style={styles.widgets}>
          <Widget name='Proteins' number={protein} width={width} />
          <Widget name='Fats' number={fat} width={width} />
          <Widget name='Carbs' number={carbs} width={width} />
          <Widget name='Water' number={water} width={width} />
        </View>
      </View>

      <View style={styles.middle}>
        <View style={styles.innerMiddle}>
          <View style={styles.row}>
            <View style={styles.col}><Text style={styles.text}>Proteins</Text></View>
            <View style={styles.col}><Text style={styles.text}>Fats</Text></View>
            <View style={styles.col}><Text style={styles.text}>Carbs</Text></View>
            <View style={styles.col}><Text style={styles.text}>Calories</Text></View>
          </View>
        </View>
        <ScrollView>
          {dummy.map((foodItem, i) => {
            return (
              <FoodItem item={foodItem} key={foodItem.name + i} />
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <Button title='Add Water' />
        <Button title='Add Food' onPress={() => { navigation.navigate('Item') }} />
      </View>
    </View>
  );
};

export default DietFull;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    paddingTop: 10,
    width: '100%'
  },
  widgets: {
    flexDirection: 'row'
  },
  topStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  top: {
    marginBottom: 10
  },
  middle: {
    flex: 1,
    width: '100%',
  },
  innerMiddle: {
    width: '100%',
    alignItems: 'center'
  },
  bottom: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  col: {
    width: '15%',
    alignItems: 'center'
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold'
  },
});

const dummy = [
  {
    name: 'Banana',
    fat: 1,
    carb: 1,
    protein: 1,
    serving: 1
  },
  {
    name: 'Apple',
    fat: 1,
    carb: 1,
    protein: 1,
    serving: 2
  }
];
