export type RootStackParamList = {
  Categories: undefined;
  MealsCategories: undefined;
  Meals: { categoryId: string };
  MealDetail: { mealId: string };
  Favorites: undefined;
};

export type RootDrawerParamList = {
  Categories: undefined;
  Meals: { categoryId: string };
  Favorites: undefined;
};
