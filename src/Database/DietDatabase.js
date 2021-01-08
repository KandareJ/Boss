import AsyncStorage from '@react-native-async-storage/async-storage';

import { getDate } from '../logic/date';

export const set_start_date = async () => {
  await AsyncStorage.setItem('boss:diet:start_date', getDate());
};

export const get_start_date = async () => {
  const timestamp = await AsyncStorage.getItem('boss:diet:start_date');
  return new Date(JSON.parse(timestamp));
};

export const set_profile = async (height, weight, age, gender, goal, activity_level) => {
  await AsyncStorage.setItem('boss:diet:profile', JSON.stringify({
    height,
    weight,
    age,
    gender,
    goal,
    activity_level
  }));
}

export const get_profile = async () => {
  let profile = await AsyncStorage.getItem('boss:diet:profile');
  return (profile) ? JSON.parse(profile) : null;
}

export const set_item = async (item) => {
  let items = await get_items();
  items[item.name] = item;
  await AsyncStorage.setItem(`boss:diet:items`, JSON.stringify(items));
}

export const get_items = async () => {
  const items = await AsyncStorage.getItem('boss:diet:items');
  return items ? JSON.parse(items) : {};
}

export const set_day = async (date, object) => {
  await AsyncStorage.setItem(`boss:diet:day:${date}`, JSON.stringify(object));
}

export const get_day = async (date) => {
  const day = await AsyncStorage.getItem(`boss:diet:day:${date}`);
  return day ? JSON.parse(day) : {
    water: 0,
    items: []
  };
}

const clear_diet_database = () => {

}
