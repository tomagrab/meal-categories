import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { CATEGORIES } from "../../Data/dummy-data";
import CategoryGridTile from "../../components/Layout/Categories/CategoryGridTile/CategoryGridTile";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Category from "../../models/category";
import { RootStackParamList } from "../../Types/Types";

type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Categories"
>;

export default function CategoriesScreen({
  navigation,
}: CategoriesScreenProps) {
  const categories = CATEGORIES;

  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("Meals", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
