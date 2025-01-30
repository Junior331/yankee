import React, { useState } from "react";
import { Image, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import * as S from "./styles";
import { skipProps } from "../Forms/@types";
import { Button } from "@/components/elements";
import { LayoutAbstract } from "@/components/organism";
import { ProfilePictureContainer } from "@/assets/icons";

export const ProfilePicture = ({ handleSkip, handleConfirm }: skipProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handlePickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permissão Necessária",
        "É necessário permitir o acesso às fotos para selecionar uma imagem."
      );
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setProfileImage(pickerResult.assets[0].uri);
    }
  };

  return (
    <LayoutAbstract
      isSecondary
      labelHeader="Later"
      handleOnPressHeader={handleSkip}
      subTitle="Show us your best side"
      text="Add some personality—upload a photo!"
    >
      <S.Container>
        <TouchableOpacity onPress={handlePickImage}>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                marginBottom: 20,
              }}
            />
          ) : (
            <ProfilePictureContainer />
          )}
        </TouchableOpacity>

        <Button
          width="100%"
          title={"Let’s add your profile pic!"}
          onPress={handlePickImage}
        />
        {profileImage && (
          <Button width="100%" title={"Confirm"} onPress={handleConfirm} />
        )}
      </S.Container>
    </LayoutAbstract>
  );
};
