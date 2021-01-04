import AsyncStorage from '@react-native-async-storage/async-storage';

export const set_start_date = async () => {
  await AsyncStorage.setItem('boss:diet:start_date', JSON.stringify(Date.now()));
};

export const get_start_date = async () => {
  const timestamp = await AsyncStorage.getItem('boss:diet:start_date');
  return new Date(JSON.parse(timestamp));
};

// HERE ========================================================================
export const set_height = async (height) => {
  await AsyncStorage.setItem('boss:diet:height', JSON.stringify(height));
}

export const get_height = async () => {
  const height = await AsyncStorage.getItem('boss:diet:height');
  return height ? JSON.parse(height) : 0;
}

export const set_weight = async (weight) => {
  await AsyncStorage.setItem('boss:diet:weight', JSON.stringify(weight));
}

export const get_weight = async () => {
  const weight = await AsyncStorage.getItem('boss:diet:weight');
  return weight ? JSON.parse(weight) : 0;
}

export const set_age = async (age) => {
  await AsyncStorage.setItem('boss:diet:age', JSON.stringify(age));
}

export const get_age = async () => {
  const age = await AsyncStorage.getItem('boss:diet:age');
  return age ? JSON.parse(age) : 0;
}

export const set_gender = async (gender) => {
  await AsyncStorage.setItem('boss:diet:gender', JSON.stringify(gender));
}

export const get_gender = async () => {
  const gender = await AsyncStorage.getItem('boss:diet:gender');
  return gender ? JSON.parse(gender) : "Not Set";
}

export const set_goal = async (goal) => {
  await AsyncStorage.setItem('boss:diet:goal', JSON.stringify(goal));
}

export const get_goal = async () => {
  const goal = await AsyncStorage.getItem('boss:diet:goal');
  return goal ? JSON.parse(goal) : "Not Set";
}

export const set_activity_level = async (activity_level) => {
  await AsyncStorage.setItem('boss:diet:activity_level', JSON.stringify(activity_level));
}

export const get_activity_level = async () => {
  const activity_level = await AsyncStorage.getItem('boss:diet:activity_level');
  return activity_level ? JSON.parse(activity_level) : "Not Set";
}
// TO HERE =====================================================================

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
    return day ? JSON.parse(day) : day;
}

const clear_diet_database = () => {

}
