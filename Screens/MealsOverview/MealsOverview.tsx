import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../../Data/dummy-data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Types/Types";
import Meal from "../../models/meal";
import MealItem from "../../components/Layout/Meals/MealItem/MealItem";
import { useLayoutEffect } from "react";
import { GlobalStyles } from "../../Constants/Style/GlobalStyles";

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

  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    function pressHandler() {
      navigation.navigate("MealDetail", {
        mealId: itemData.item.id,
      });
    }

    return (
      <MealItem
        onPress={pressHandler}
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  }

  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
