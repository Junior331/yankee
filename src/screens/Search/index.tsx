import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import * as S from "./styles";
import { LeftArrow } from "@/assets/icons";
import { images, mockMessages } from "./utils";
import { Layout } from "@/components/organism";
import { dismissKeyboard } from "@/utils/utils";
import { Loading } from "@/components/elements";
import { SearchProfile } from "../SearchProfile";

const { width } = Dimensions.get("window");

export const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [imageLoading, setImageLoading] = useState(true);
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
    setSearchHistory(
      searchHistory.filter((search) => search !== searchToDelete)
    );
  };

  const handleDeleteAll = () => {
    setSearchHistory([]);
  };

  const handleBack = () => {
    dismissKeyboard();
    setIsSearch(false);
    setSearchValue("");
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <Layout titleHeader="yankee" isShowHeader={!isSearch}>
        <S.ContainerHeader>
          {isSearch && (
            <S.ButtonIcon onPress={handleBack}>
              <LeftArrow color="#ffffff" />
            </S.ButtonIcon>
          )}

          <S.ContainerInput>
            <S.SearchIcon name="search" size={20} color="#171717" />
            <S.StyledInput
              value={searchValue}
              onChangeText={setSearchValue}
              onSubmitEditing={handleSearch}
              onPress={() => setIsSearch(true)}
              placeholder={isSearch ? "Type here..." : "Search"}
            />
          </S.ContainerInput>
        </S.ContainerHeader>

        {isSearch ? (
          <SearchProfile
            filteredUsers={filteredUsers}
            searchHistory={searchHistory || []}
            handleDeleteAll={handleDeleteAll}
            handleDeleteSearch={handleDeleteSearch}
          />
        ) : (
          <FlatList
            data={images}
            numColumns={3}
            style={{ marginBottom: 70, marginTop: 20 }}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  width: width / 3 - 14,
                  height: width / 3 - 3,
                  backgroundColor: "#ccc",
                }}
              >
                <TouchableOpacity>
                  {imageLoading && <Loading />}
                  <Image
                    alt="Image"
                    resizeMode="cover"
                    source={{ uri: item.uri }}
                    onLoadEnd={() => setImageLoading(false)}
                    style={{ width: "100%", height: "100%" }}
                  />
                </TouchableOpacity>
              </View>
            )}
            columnWrapperStyle={{ gap: 3 }}
            keyExtractor={(item) => String(item.id)}
            ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
          />
        )}
      </Layout>
    </TouchableWithoutFeedback>
  );
};
