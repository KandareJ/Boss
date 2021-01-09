import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import ProgramList from './ProgramList';
import DietFull from './Diet/DietFull';
import CreateItem from './Diet/CreateItem';
import EditItem from './Diet/EditItem';
import Profile from './Diet/Profile';
import AddWater from './Diet/AddWater';
import { getDate } from '../logic/date';
import { get_profile, get_day, set_day } from '../Database/DietDatabase';
import { add_program, new_profile, set_items, set_water } from '../actions';

const Stack = createStackNavigator();

const Programs = ({ add_program, new_profile, set_items, set_water, programs }) => {

  React.useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    let profile = await get_profile();
    if (profile && programs.length === 0) {
      let day = await get_day(getDate());
      day.weight = profile.weight;
      await set_day(getDate(), day);
      new_profile(profile);
      add_program('Diet');
      set_items(day.items);
      set_water(day.water);
    }
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProgramList} options={options} />
      <Stack.Screen name="Diet" component={DietFull} options={options} />
      <Stack.Screen name="Add Item" component={CreateItem} options={options} />
      <Stack.Screen name="Edit Item" component={EditItem} options={options} />
      <Stack.Screen name="Profile" component={Profile} options={options} />
      <Stack.Screen name="Water" component={AddWater} options={options} />
    </Stack.Navigator>
  );
};

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

const mapStateToProps = (state) => {
  return {
    programs: state.programs
  };
}

export default connect(mapStateToProps, { add_program, new_profile, set_items, set_water })(Programs);
