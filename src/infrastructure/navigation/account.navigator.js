import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: false }}>
      <Stack.Screen
        name="Main"
        component={() => (
          <View>
            <Text>Account screen</Text>
          </View>
        )}
      />
      <Stack.Screen
        name="Login"
        component={() => (
          <View>
            <Text>Login screen</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};
