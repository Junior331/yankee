import React, { useCallback, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { Button, Text } from "@/components/elements";
import { GenericBottomSheet } from "@/components/organism";
import { useWindowDimensions } from "react-native";

export const Fire = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const { height } = useWindowDimensions();
  const snapPoints = [height * 0.95];

  return (
    <>
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />
      <GenericBottomSheet ref={bottomSheetRef} size={2} >
        <Text>Awesome 🎉</Text>
      </GenericBottomSheet>
    </>
  );
};
