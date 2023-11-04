import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./Screens/Categories/CategoriesScreen";
import MealsOverview from "./Screens/MealsOverview/MealsOverview";
import { RootDrawerParamList, RootStackParamList } from "./Types/Types";
import { MyTheme } from "./Constants/NavigationTheme/NavigationTheme";
import MealDetail from "./Screens/MealDetail/MealDetail";
import FavoritesScreen from "./Screens/Favorites/Favorites";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./Store/Context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./Store/Redux/store";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerMavigation() {
  return (
    <Drawer.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <FavoritesContextProvider>
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: "Back",
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerMavigation}
            options={{
              headerTitle: "Meal Categories",
              headerShown: false,
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
    </Provider>
    // </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
