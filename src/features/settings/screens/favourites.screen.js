import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
  padding-left: ${(props) => props.theme.space[3]};
`;
const HeadContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const CloseText = styled(Text)`
  margin-right: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <Spacer position="top" size="large">
        <HeadContainer>
          <Title>Favourites</Title>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CloseText>Close</CloseText>
          </TouchableOpacity>
        </HeadContainer>
      </Spacer>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No Favourites yet!</Text>
    </NoFavouritesArea>
  );
};
