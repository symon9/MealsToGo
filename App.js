import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet } from "react-native";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { padding: 16, backgroundColor: "green" },
  text: { flex: 1, padding: 16, backgroundColor: "blue" },
});
