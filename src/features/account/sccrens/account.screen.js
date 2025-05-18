import React from "react";

import { AccountBackground, AccountCover } from "../components/account.styles";
import { Text } from "react-native";

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <Text>Account Screen</Text>
    </AccountBackground>
  );
};
