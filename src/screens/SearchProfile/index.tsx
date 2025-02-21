import React, { useState } from "react";
import { Dimensions, Image } from "react-native";

import * as S from "./styles";
import { Clock, X } from "@/assets/icons";
import { ISearchProfile } from "./@types";
import { Loading } from "@/components/elements";

const { width } = Dimensions.get("screen");

export const SearchProfile = ({
  searchHistory,
  filteredUsers,
  handleDeleteAll,
  handleDeleteSearch,
}: ISearchProfile) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <S.Container style={{ minWidth: width * 0.94 }}>
      {searchHistory?.length > 0 && (
        <S.RecentSearchesContainer>
          <S.RecentSearchesHeader>
            <S.RecentSearchesTitle>Recent Searches</S.RecentSearchesTitle>
            <S.DeleteAllButton onPress={handleDeleteAll}>
              <S.DeleteAllText>Delete all</S.DeleteAllText>
            </S.DeleteAllButton>
          </S.RecentSearchesHeader>
          <S.ContainerRecents>
            {searchHistory.map((search, index) => (
              <S.RecentSearchItem key={index}>
                <S.SearchRecent>
                  <Clock />
                  <S.RecentSearchText>{search}</S.RecentSearchText>
                </S.SearchRecent>
                <S.DeleteButton onPress={() => handleDeleteSearch(search)}>
                  <X color="#808080" />
                </S.DeleteButton>
              </S.RecentSearchItem>
            ))}
          </S.ContainerRecents>
        </S.RecentSearchesContainer>
      )}

      <S.ContainerProfiles>
        <S.Title numberOfLines={1}>Profiles</S.Title>
        {filteredUsers.map((message) => (
          <S.ContainerUser key={message.id}>
            <S.UserContent>
              <S.ContainerAvatar>
                {imageLoading && <Loading />}
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                  }}
                  resizeMode="cover"
                  source={{ uri: message.photo }}
                  onLoadEnd={() => setImageLoading(false)}
                />
              </S.ContainerAvatar>

              <S.ContainerText>
                <S.Title numberOfLines={1}>{message.name}</S.Title>
                <S.Text numberOfLines={2} color="#f2f2f2">
                  @{message.name.replace(/\s+/g, "_").toLowerCase()}
                </S.Text>
              </S.ContainerText>

              <S.ButtonFollow>
                <S.Text
                  color="#171717"
                  tabs
                  style={{
                    fontSize: 9,
                    fontWeight: 500,
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  Follow
                </S.Text>
                <S.IconAdd>
                  <S.Text tabs style={{ fontSize: 8, marginTop: -1.4 }}>
                    +
                  </S.Text>
                </S.IconAdd>
              </S.ButtonFollow>
            </S.UserContent>
            <X />
          </S.ContainerUser>
        ))}
      </S.ContainerProfiles>
    </S.Container>
  );
};
