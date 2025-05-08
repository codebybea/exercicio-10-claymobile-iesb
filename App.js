import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider as PaperProvider } from "react-native-paper";
import EscudoScreen from "./components/screens/EscudoScreen";
import JogadoresScreen from "./components/screens/JogadoresScreen";
import TitulosScreen from "./components/screens/TitulosScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Escudo"
          screenOptions={{
            drawerStyle: { backgroundColor: "#fff", width: 240 },
            drawerActiveTintColor: "#e91e63",
            drawerInactiveTintColor: "#333",
          }}
        >
          <Drawer.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons name="shield" size={24} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Jogadores"
            component={JogadoresScreen}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-group"
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Titulos"
            component={TitulosScreen}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons name="trophy" size={24} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
