import React, { useState } from "react";
import { Dimensions, Image, ScrollView } from "react-native";

import * as S from "./styles";
import { Clock, X } from "@/assets/icons";
import { ISearchProfile } from "./@types";
import { Loading } from "@/components/elements";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";

const { width } = Dimensions.get("screen");

export const SearchProfile = ({
  searchHistory,
  filteredUsers,
  handleDeleteAll,
  handleDeleteSearch,
}: ISearchProfile) => {
  const [imageLoading, setImageLoading] = useState(true);
    const { theme } = useTheme();

  return (
    <S.Container style={{ minWidth: width * 0.94 }} bg_color={Colors[theme].background}>
      {searchHistory?.length > 0 && (
        <S.RecentSearchesContainer>
          <S.RecentSearchesHeader>
            <S.RecentSearchesTitle color={Colors[theme].text}>Recent Searches</S.RecentSearchesTitle>
            <S.DeleteAllButton onPress={handleDeleteAll}>
              <S.DeleteAllText>Delete all</S.DeleteAllText>
            </S.DeleteAllButton>
          </S.RecentSearchesHeader>
          <S.ContainerRecents color={Colors[theme].tabBar}>
            {searchHistory.length > 3 ? (
              <ScrollView 
                showsVerticalScrollIndicator={false}
                style={{ maxHeight: 100 }}
              >
                {searchHistory.map((search, index) => (
                  <S.RecentSearchItem key={index}>
                    <S.SearchRecent>
                      <Clock color={Colors[theme].icon}  />
                      <S.RecentSearchText color={Colors[theme].text}>{search}</S.RecentSearchText>
                    </S.SearchRecent>
                    <S.DeleteButton onPress={() => handleDeleteSearch(search)}>
                      <X color={Colors[theme].icon}  />
                    </S.DeleteButton>
                  </S.RecentSearchItem>
                ))}
              </ScrollView>
            ) : (
              <>
                {searchHistory.map((search, index) => (
                  <S.RecentSearchItem key={index}>
                    <S.SearchRecent>
                      <Clock color={Colors[theme].icon}/>
                      <S.RecentSearchText color={Colors[theme].text}>{search}</S.RecentSearchText>
                    </S.SearchRecent>
                    <S.DeleteButton onPress={() => handleDeleteSearch(search)}>
                      <X color={Colors[theme].icon} />
                    </S.DeleteButton>
                  </S.RecentSearchItem>
                ))}
              </>
            )}
          </S.ContainerRecents>
        </S.RecentSearchesContainer>
      )}

      <S.ContainerProfiles>
        <S.Title numberOfLines={1} color={Colors[theme].text}>Profiles</S.Title>
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
                <S.Title numberOfLines={1} color={Colors[theme].text}>{message.name}</S.Title>
                <S.Text numberOfLines={2} color={Colors[theme].text}>
                  @{message.name.replace(/\s+/g, "_").toLowerCase()}
                </S.Text>
              </S.ContainerText>

              <S.ButtonFollow color={Colors[theme].text}>
                <S.Text
                 color={Colors[theme].text}
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
                  <S.Text tabs style={{ fontSize: 8, marginTop: -1.4 }} color={Colors[theme].text}>
                    +
                  </S.Text>
                </S.IconAdd  >
              </S.ButtonFollow >
            </S.UserContent>
            <X color={Colors[theme].icon}/>
          </S.ContainerUser>
        ))}
      </S.ContainerProfiles>
    </S.Container>
  );
};
