import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./Screens/Categories/CategoriesScreen";
import MealsOverview from "./Screens/MealsOverview/MealsOverview";
import { RootStackParamList } from "./Types/Types";
import { MyTheme } from "./Constants/NavigationTheme/NavigationTheme";
import MealDetail from "./Screens/MealDetail/MealDetail";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerTitle: "Meal Categories",
          }}
        />
        <Stack.Screen
          name="Meals"
          component={MealsOverview}
          options={{ title: "Meals" }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}
          options={{ title: "Preparation" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
