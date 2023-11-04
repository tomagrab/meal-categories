import { FlatList, ListRenderItemInfo, View } from "react-native";
import Meal from "../../../../models/meal";
import MealItem from "../MealItem/MealItem";
import { GlobalStyles } from "../../../../Constants/Style/GlobalStyles";

type MealListProps = {
  items: Meal[];
};

export default function MealList({ items }: MealListProps) {
  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    return (
      <MealItem
        id={itemData.item.id}
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
