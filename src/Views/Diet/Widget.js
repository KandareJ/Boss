import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Widget = ({number, name, width}) => {
  const bg = {
    width: width || '40%'
  };

  return (
    <View style={{...styles.bg, ...bg}}>
      <Text style={styles.name}>{name}:</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default Widget;

const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .4
  },
  number: {
    fontWeight: 'bold',
    fontSize: 30
  },
  name: {
    fontSize: 17
  }
});
