import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStack.Screen name="Favourites" component={() => null} />
    </SettingsStack.Navigator>
  );
};
