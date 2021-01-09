import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Widget from './Widget';
import WeightEdit from './WeightEdit';
import FoodItem from './FoodItem';
import Button from './Button';
import { macros } from '../../logic/macros';

const DietFull = ({ navigation, items, profile, water_consumed }) => {
  const {protein, carbohydrates, fat, calories, water} = macros(profile, items, water_consumed);
  const width = '20%';

  return (
    <View style={styles.bg}>
      <View style={styles.top}>
        <View style={styles.topStats}>
          <Text>Calories: {calories.toFixed(1)}</Text>
          <WeightEdit weight={profile.weight.toFixed(1)}/>
        </View>
        <View style={styles.widgets}>
          <Widget name='Water' number={(water).toFixed(1)} width={width} />
          <Widget name='Fats' number={fat.toFixed(1)} width={width} />
          <Widget name='Carbs' number={carbohydrates.toFixed(1)} width={width} />
          <Widget name='Proteins' number={protein.toFixed(1)} width={width} />
        </View>
      </View>

      <View style={styles.middle}>
        <View style={styles.innerMiddle}>
          <View style={styles.row}>
            <View style={styles.col}><Text style={styles.text}>Calories</Text></View>
            <View style={styles.col}><Text style={styles.text}>Fats</Text></View>
            <View style={styles.col}><Text style={styles.text}>Carbs</Text></View>
            <View style={styles.col}><Text style={styles.text}>Proteins</Text></View>
          </View>
        </View>
        <ScrollView>
          {items.map((foodItem, i) => {
            return (
              <FoodItem item={foodItem} key={foodItem.name + i} index={i} navigation={navigation} />
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <Button title='Add Water' textStyle={styles.buttonText} style={styles.button} onPress={() => { navigation.navigate('Water') }} />
        <Button title='Add Food' textStyle={styles.buttonText} style={styles.button} onPress={() => { navigation.navigate('Item') }} />
      </View>
    </View>
  );
};

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
    fontSize: 12,
    fontWeight: 'bold'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 7
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '500'
  }
});

const mapStateToProps = (state) => {
  return {
    items: state.items,
    profile: state.diet_profile,
    water_consumed: state.water
  };
}

export default connect(mapStateToProps)(DietFull);
