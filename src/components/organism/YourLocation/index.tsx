import { Alert } from "react-native";
import React, { useState } from "react";
import * as Location from "expo-location";

import * as S from "./styles";
import { location } from "./@types";
import { skipProps } from "../Forms/@types";
import { SetLocation } from "@/assets/icons";
import { LayoutAbstract } from "@/components/organism";
import { Button, Text, Title } from "@/components/elements";

export const YourLocation = ({ handleSkip, handleConfirm }: skipProps) => {
  const [location, setLocation] = useState<location>({
    latitude: 0,
    longitude: 0,
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const handleSetLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied.");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      if (latitude && longitude) {
        setLocation({ latitude, longitude });

        const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        if (reverseGeocodedAddress.length > 0) {
          const { street, city, region, country } = reverseGeocodedAddress[0];
          setAddress(`${street}, ${city}, ${region}, ${country}`);
        } else {
          setAddress("Address not found.");
        }
      }
    } catch (error: any) {
      setErrorMsg("Error fetching location.");
      Alert.alert("Erro ::", error.message);
    }
  };
  return (
    <LayoutAbstract
      isSecondary
      labelHeader="Later"
      handleOnPressHeader={handleSkip}
    >
      <S.Container>
        <SetLocation />
        <Title>Set your location</Title>
        <Text>Location on, explore more!</Text>

        {address && <Text>Sua localização: {address}</Text>}
        {errorMsg && <Text>{errorMsg}</Text>}
        <Button
          width="100%"
          title={"Let’s set it up!"}
          onPress={handleSetLocation}
        />
        {address && (
          <Button width="100%" title={"Confirm"} onPress={handleConfirm} />
        )}
      </S.Container>
    </LayoutAbstract>
  );
};
