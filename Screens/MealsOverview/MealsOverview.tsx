import { CATEGORIES, MEALS } from "../../Data/dummy-data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Types/Types";
import { useLayoutEffect } from "react";
import MealList from "../../components/Layout/Meals/MealList/MealList";

type MealsOverviewProps = NativeStackScreenProps<RootStackParamList, "Meals">;

export default function MealsOverview({
  navigation,
  route,
}: MealsOverviewProps) {
  const categoryId = route?.params?.categoryId;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealList items={meals} />;
}
