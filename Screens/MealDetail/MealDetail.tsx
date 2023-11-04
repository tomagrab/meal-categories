import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../Types/Types";
import { MEALS } from "../../Data/dummy-data";
import { ColorScheme } from "../../Constants/ColorScheme/ColorScheme";
import { useContext, useLayoutEffect } from "react";
import { GlobalStyles } from "../../Constants/Style/GlobalStyles";
import IconButton from "../../components/UI/IconButton/IconButton";
import { FavoritesContext } from "../../Store/Context/favorites-context";

type MealDetailProps = NativeStackScreenProps<RootStackParamList, "MealDetail">;

export default function MealDetail({ route, navigation }: MealDetailProps) {
  const favoriteMealsCTX = useContext(FavoritesContext);

  const mealId = route?.params?.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealsCTX.ids.includes(mealId);

  function headerButtonPressHandler() {
    if (mealIsFavorite) {
      favoriteMealsCTX.removeFavorite(mealId);
    } else {
      favoriteMealsCTX.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    const mealTitle = meal?.title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon="star"
            size={24}
            color={mealIsFavorite ? ColorScheme.gold : ColorScheme.neutral}
          />
        );
      },
    });
  }, [mealId, navigation, headerButtonPressHandler]);

  return (
    <View style={GlobalStyles.container}>
      <ScrollView>
        <View style={styles.mealItemImage}>
          <Image
            source={{ uri: meal?.imageUrl }}
            style={{
              width: "100%",
              height: 200,
            }}
          />
          <View style={styles.mealItemInfoContainer}>
            <Text style={styles.mealItemInfoText}>
              <Text style={styles.mealItemInfoTextTitle}>Complexity</Text>:{" "}
              {meal?.complexity}
            </Text>
            <Text style={styles.mealItemInfoText}>
              <Text style={styles.mealItemInfoTextTitle}>Duration</Text>:{" "}
              {meal?.duration} minutes
            </Text>
            <Text style={styles.mealItemInfoText}>
              <Text style={styles.mealItemInfoTextTitle}>Affordability</Text>:{" "}
              {meal?.affordability}
            </Text>
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>Ingredients</Text>
          </View>
          {meal?.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.listItem}>
              {index + 1}: {ingredient}
            </Text>
          ))}
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>Steps</Text>
          </View>
          {meal?.steps.map((step, index) => (
            <Text key={index} style={styles.listItem}>
              {index + 1}: {step}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItemImage: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: ColorScheme.secondary,
  },

  mealItemTitle: {
    padding: 16,
  },

  mealItemTitleText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },

  mealItemInfoContainer: {
    backgroundColor: ColorScheme.info,
    padding: 10,
  },

  mealItemInfoText: {
    color: "white",
    fontSize: 16,
    paddingVertical: 5,
  },

  mealItemInfoTextTitle: {
    fontWeight: "bold",
  },

  listContainer: {
    padding: 16,
  },

  listTitleContainer: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: ColorScheme.primary,
    borderBottomWidth: 2,
  },

  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: ColorScheme.primary,
  },

  listItem: {
    marginVertical: 10,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: ColorScheme.neutral,
    backgroundColor: ColorScheme.secondary,
    borderRadius: 10,
    overflow: "hidden",
  },
});
