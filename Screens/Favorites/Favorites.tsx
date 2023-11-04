import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../../Store/Context/favorites-context";
import { MEALS } from "../../Data/dummy-data";
import MealList from "../../components/Layout/Meals/MealList/MealList";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootDrawerParamList, RootStackParamList } from "../../Types/Types";
import { ColorScheme } from "../../Constants/ColorScheme/ColorScheme";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Redux/store";

type FavoritesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Favorites"
>;

export default function FavoritesScreen({ navigation }: FavoritesScreenProps) {
  /* const favoriteMealsCTX = useContext(FavoritesContext);
  const favoriteMeals = favoriteMealsCTX.ids; */

  const favoriteMeals = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  );

  const meals = MEALS.filter((meal) => favoriteMeals.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.centeredScreen}>
        <Text style={styles.emptyText}>
          You haven't added any favorites yet!
        </Text>
        <Pressable
          style={styles.discoverButton}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={styles.discoverButtonText}>Discover Meals</Text>
        </Pressable>
      </View>
    );
  }

  return <MealList items={meals} />;
}

const styles = StyleSheet.create({
  centeredScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  emptyText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: ColorScheme.primary,
    textAlign: "center",
  },

  discoverButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: ColorScheme.gold, // Use a color that matches your theme
    borderRadius: 20,
  },
  discoverButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
