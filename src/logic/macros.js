export const macros = (profile, items) => {
  const weight = profile.weight * 0.453592;
  const height = profile.height * 2.54;

  let bmr = (profile.gender === 'Male')
    ? 10 * weight + 6.25 * height - 5 * profile.age + 5
    : 10 * weight + 6.25 * height - 5 * profile.age - 161;

  let base_calories;

  if (profile.activity_level === 'Sedentary') base_calories = bmr * 1.2;
  else if (profile.activity_level === 'Lightly Active') base_calories = bmr * 1.3;
  else if (profile.activity_level === 'Moderately Active') base_calories = bmr * 1.5;
  else if (profile.activity_level === 'Very Active') base_calories = bmr * 1.7;
  else base_calories = bmr * 1.9;

  let final_calories;

  if (profile.goal === 'Fat Loss') final_calories = base_calories * .8;
  else if (profile.goal === 'Maintain') final_calories = base_calories;
  else final_calories = base_calories * 1.2;

  let protein_eaten = 0;
  let carbs_eaten = 0;
  let fats_eaten = 0;
  let calories_eaten = 0;

  for (let i = 0; i < items.length; i++) {
    protein_eaten += items[i].protein * items[i].servings;
    carbs_eaten += items[i].carbs * items[i].servings;
    fats_eaten += items[i].fat * items[i].servings;
    calories_eaten += items[i].calories * items[i].servings;
  }

  return {
    protein: final_calories * 0.194 / 4 - protein_eaten,
    carbohydrates: final_calories * 0.556 / 4 - carbs_eaten,
    fat: final_calories * 0.250 / 9 - fats_eaten,
    calories: final_calories - calories_eaten,
    water: 2,
  };
}
