/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ForYou from "./src/Screens/ForYou/ForYou";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Cards from "./src/Screens/Cards";
import Loans from "./src/Screens/Loans";
import Insurance from "./src/Screens/Insurance";
import Money from "./src/Screens/Money";
import { Foundation } from "@react-native-vector-icons/foundation";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { COLORS } from "./src/theme";

const Tab = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="For you"
            component={ForYou}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Foundation name="clipboard-notes" color={color} size={size} />
              ),
              tabBarActiveTintColor: COLORS.primary,
            }}
          />
          <Tab.Screen
            name="Cards"
            component={Cards}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialDesignIcons
                  name="credit-card-multiple-outline"
                  color={color}
                  size={size}
                />
              ),
              tabBarActiveTintColor: COLORS.primary,
            }}
          />
          <Tab.Screen
            name="Loans"
            component={Loans}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialDesignIcons
                  name="bank-outline"
                  color={color}
                  size={size}
                />
              ),
              tabBarActiveTintColor: COLORS.primary,
            }}
          />
          <Tab.Screen
            name="Insurance"
            component={Insurance}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="shield-checkmark" color={color} size={size} />
              ),
              tabBarActiveTintColor: COLORS.primary,
            }}
          />
          <Tab.Screen
            name="Money"
            component={Money}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="money-bill-1" color={color} size={size} />
              ),
              tabBarActiveTintColor: COLORS.primary,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
