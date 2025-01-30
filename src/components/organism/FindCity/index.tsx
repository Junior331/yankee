import React, { useState } from "react";

import * as S from "./styles";
import { Search } from "@/assets/icons";
import { mocks } from "@/services/mocks";

export const FindCity = () => {
  const [value, setValue] = useState("");

  const filteredCities = mocks.citys
    .flatMap((estado) =>
      estado.cidades.map((cidade) => ({ nome: cidade, estado: estado.nome }))
    )
    .filter((cidade) =>
      cidade.nome.toLowerCase().includes(value.toLowerCase())
    );

  return (
    <S.Container>
      <S.Title>City</S.Title>
      <S.Content minimumValue={0} maximumValue={1}>
        <S.ContainerInput>
          <S.Input
            onChangeText={(city: string) => setValue(city)}
            placeholder={"Select"}
          />
          <Search />
        </S.ContainerInput>
        <S.ListCity>
          {filteredCities.length > 0 ? (
            filteredCities.map((item, index) => (
              <S.OptionCity key={index}>
                <S.Text fontSize="12px">{`${item.nome} - ${item.estado}`}</S.Text>
              </S.OptionCity>
            ))
          ) : (
            <S.Text fontSize="12px">No results found</S.Text>
          )}
        </S.ListCity>
      </S.Content>
    </S.Container>
  );
};
