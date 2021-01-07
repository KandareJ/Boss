import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProgramList from './ProgramList';
import DietFull from './Diet/DietFull';
import CreateItem from './Diet/CreateItem';
import Profile from './Diet/Profile';
import AddWater from './Diet/AddWater';

const Stack = createStackNavigator();

const Programs = () => {
  const options = {
    headerStyle: {
      backgroundColor: 'black',
      shadowColor: 'black',
      shadowRadius: 5,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: .5,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProgramList} options={options} />
      <Stack.Screen name="Diet" component={DietFull} options={options} />
      <Stack.Screen name="Item" component={CreateItem} options={options} />
      <Stack.Screen name="Profile" component={Profile} options={options} />
      <Stack.Screen name="Water" component={AddWater} options={options} />
    </Stack.Navigator>
  );
};

export default Programs;
