import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DietFull from './Diet/DietFull';
import CreateItem from './Diet/CreateItem';
import Profile from './Diet/Profile';
import DietOverview from './Diet/DietOverview';
import Button from './Diet/Button';

const programs = [
  'Diet'
];

const Stack = createStackNavigator();

const Programs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={List} />
      <Stack.Screen name="Diet" component={DietFull} />
      <Stack.Screen name="Item" component={CreateItem} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const List = ({ navigation }) => {
  return (
    <View style={styles.bg}>
      <ScrollView>
        <View style={styles.center}>
          {programs.map((x, i) => {
            if (x === 'Diet') {
              return (
                <TouchableOpacity key={i} onPress={() => navigation.navigate('Diet')}>
                  <DietOverview />
                </TouchableOpacity>
              );
            }
          })}
          <Button title='+' onPress={() => navigation.navigate('Profile')}/>
        </View>
      </ScrollView>
    </View>
  );
}

export default Programs;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%'
  },
  center: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10
  }
});
