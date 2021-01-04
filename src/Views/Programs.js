import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProgramList from './ProgramList';
import DietFull from './Diet/DietFull';
import CreateItem from './Diet/CreateItem';
import Profile from './Diet/Profile';

const Stack = createStackNavigator();

const Programs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProgramList} />
      <Stack.Screen name="Diet" component={DietFull} />
      <Stack.Screen name="Item" component={CreateItem} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Programs;
