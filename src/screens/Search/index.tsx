import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import * as S from "./styles";
import { images } from "./utils";
import { Layout } from "@/components/organism";
import { Loading } from "@/components/elements";

const { width } = Dimensions.get("window");

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Layout titleHeader="yankee">
      <S.ContainerInput>
        <S.SearchIcon name="search" size={20} color="#171717" />
        <S.StyledInput
          value={searchValue}
          placeholder="Search"
          onChangeText={setSearchValue}
        />
      </S.ContainerInput>
      <FlatList
        data={images}
        numColumns={3}
        style={{ padding: 2, marginBottom: 50 }}
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
            {imageLoading && <Loading />}
            <TouchableOpacity>
              <Image
                resizeMode="cover"
                alt="Image ${item.name}"
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
    </Layout>
  );
};
