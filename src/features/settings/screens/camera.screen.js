import React, { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Button, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const ProfileCamera = styled(CameraView)`
  width: 100%;
  height: 100%;
`;
const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: "transparent";
  margin: 20px;
`;
const TouchableButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  align-self: flex-end;
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 5px;
  padding: 10px;
`;
const NoPermissionView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const NoPermissionText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const CameraScreen = () => {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <SafeArea>
        <NoPermissionView>
          <NoPermissionText>
            We need your permission to show the camera
          </NoPermissionText>
          <Button onPress={requestPermission} title="grant permission" />
        </NoPermissionView>
      </SafeArea>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <ProfileCamera facing={facing}>
      <ButtonContainer>
        <TouchableButton onPress={toggleCameraFacing}>
          <Text>Flip Camera</Text>
        </TouchableButton>
      </ButtonContainer>
    </ProfileCamera>
  );
};
