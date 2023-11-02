import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../../Data/dummy-data";
import CategoryGridTile from "../../components/Layout/Categories/CategoryGridTile/CategoryGridTile";

export default function CategoriesScreen() {
  const categories = CATEGORIES;

  function renderCategoryItem(itemData: any) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
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
