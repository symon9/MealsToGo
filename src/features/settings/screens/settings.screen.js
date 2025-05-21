import React, { useCallback, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const { onLogout, user } = useContext(AuthenticationContext);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          onPress={() => navigation.navigate("Favourites")}
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        />
        <SettingsItem
          title="Logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
        />
      </List.Section>
    </SafeArea>
  );
};
