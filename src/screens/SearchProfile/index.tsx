import { Image } from "react-native";
import React, { useState } from "react";

import * as S from "./styles";
import { mockMessages } from "./utils";
import { Clock, LeftArrow, X } from "@/assets/icons";
import { useRouter } from "expo-router";

export const SearchProfile = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const filteredUsers = mockMessages.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = () => {
    if (searchValue.trim() && !searchHistory.includes(searchValue)) {
      setSearchHistory([...searchHistory, searchValue]);
    }
  };

  const handleDeleteSearch = (searchToDelete: string) => {
    setSearchHistory(searchHistory.filter((search) => search !== searchToDelete));
  };

  const handleDeleteAll = () => {
    setSearchHistory([]);
  };
      const router = useRouter();
  

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.ButtonIcon onPress={() => router.push( "/(tabs)/search" ) }>
          <LeftArrow color="#ffffff"  />
        </S.ButtonIcon>
        <S.ContainerInput>
          <S.SearchIcon name="search" size={20} color="#171717" />
          <S.StyledInput
            value={searchValue}
            placeholder="Search"
            onChangeText={setSearchValue}
            onSubmitEditing={handleSearch}
          />
        </S.ContainerInput>
      </S.ContainerHeader>

      {searchHistory.length > 0 && (
        <S.RecentSearchesContainer>
          <S.RecentSearchesHeader>
            <S.RecentSearchesTitle>Recent Searches</S.RecentSearchesTitle>
            <S.DeleteAllButton onPress={handleDeleteAll}>
              <S.DeleteAllText>Delete all</S.DeleteAllText>
            </S.DeleteAllButton>
          </S.RecentSearchesHeader>
          <S.containerRecents>
          {searchHistory.map((search, index) => (
           
            <S.RecentSearchItem key={index}>
              <S.SearchRecent>
               <Clock />
              <S.RecentSearchText>{search}</S.RecentSearchText>
              </S.SearchRecent>
              <S.DeleteButton onPress={() => handleDeleteSearch(search)}>
                <X color="#808080"  />
              </S.DeleteButton>
            </S.RecentSearchItem>
          ))}
          </S.containerRecents>
        </S.RecentSearchesContainer>
      )}

        <S.containerProfiles>
       <S.Title numberOfLines={1}>Profiles</S.Title>

      {filteredUsers.map((message) => (
        <S.ContainerUser key={message.id}>
          <S.UserContent>
            <S.ContainerAvatar>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                }}
                resizeMode="cover"
                source={{ uri: message.photo }}
              />
            </S.ContainerAvatar>

            <S.ContainerText>
              <S.Title numberOfLines={1}>{message.name}</S.Title>
              <S.Text numberOfLines={2} color="#f2f2f2">
                @{message.name.replace(/\s+/g, '_').toLowerCase()}
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
       </S.containerProfiles>

    </S.Container>
  );
};