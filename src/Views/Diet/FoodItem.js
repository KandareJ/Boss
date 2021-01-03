import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FoodItem = ({item}) => {
  return (
    <View style={styles.bg}>
      <View style={styles.item}>
        <View><Text style={styles.title}>{item.name}</Text></View>
        <View style={styles.row}>
          <View style={styles.col}><Text style={styles.text}>{(item.protein) * item.serving}</Text></View>
          <View style={styles.col}><Text style={styles.text}>{(item.fat) * item.serving}</Text></View>
          <View style={styles.col}><Text style={styles.text}>{(item.carb) * item.serving}</Text></View>
          <View style={styles.col}><Text style={styles.text}>{(item.protein * 4 + item.carb * 4 + item.fat * 9) * item.serving}</Text></View>
        </View>
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  item: {
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .4,
    marginVertical: 5,
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 7,
    marginTop: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  col: {
    width: '15%',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});
