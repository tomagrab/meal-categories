import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ColorScheme } from "../../../../Constants/ColorScheme/ColorScheme";
import Capitalize from "../../../../Utils/Capitalize";
import { GlobalStyles } from "../../../../Constants/Style/GlobalStyles";

type MealItemProps = {
  onPress: () => void;
  title: string;
  image: string;
  duration: number;
  complexity: string;
  affordability: string;
};

export default function MealItem({
  onPress,
  title,
  image,
  duration,
  complexity,
  affordability,
}: MealItemProps) {
  return (
    <View style={styles.mealItemCard}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          GlobalStyles.button,
          pressed ? GlobalStyles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.mealItemInnerContainer}>
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: 200,
            }}
          />
          <Text style={styles.mealItemTitle}>{title}</Text>
          <View style={styles.mealItemInfoContainer}>
            <Text style={styles.mealItemInfoText}>
              <Text style={styles.mealItemInfoTextTitle}>Duration</Text>:{" "}
              {duration} minutes
            </Text>
            <Text style={styles.mealItemInfoText}>
              <Text style={styles.mealItemInfoTextTitle}>Complexity</Text> :{" "}
              {Capitalize(complexity)}
            </Text>
            <Text style={styles.mealItemInfoText}>
              <Text style={styles.mealItemInfoTextTitle}>Affordability</Text>:{" "}
              {Capitalize(affordability)}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItemCard: {
    marginVertical: 10,
    backgroundColor: ColorScheme.secondary,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "hidden",
  },

  mealItemInnerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },

  mealItemTitle: {
    fontSize: 18,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 10,
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
});
