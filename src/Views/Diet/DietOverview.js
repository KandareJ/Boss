import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Widget from './Widget';
import { macros } from '../../logic/macros';

const DietOverview = ({ profile, items }) => {
  const { fat, carbohydrates, calories, protein, water } = macros(profile, items);
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Diet Overview</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Weight: {profile.weight.toFixed(1)}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Calories: {calories.toFixed(0)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.widgets}>
        <Widget name='Proteins' number={protein.toFixed(1)} />
        <Widget name='Fats' number={fat.toFixed(1)} />
        <Widget name='Carbs' number={carbohydrates.toFixed(1)} />
        <Widget name='Water' number={water.toFixed(1)} />
      </View>
    </View>
  );
};

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

const mapStateToProps = (state) => {
  return {
    profile: state.diet_profile,
    items: state.items
  };
}

export default connect(mapStateToProps)(DietOverview);
