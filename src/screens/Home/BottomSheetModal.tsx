import React, { useCallback, useRef } from "react";
import { Text, StyleSheet, Button, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export const CustomBottomSheetModal = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Obtém a altura da janela
  const { height } = useWindowDimensions();

  // Define o snapPoint para 95% da altura da tela
  const snapPoints = [height * 0.95];

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          snapPoints={snapPoints}
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
          backgroundStyle={{ backgroundColor: "#171717" }}
          handleIndicatorStyle={{ backgroundColor: "#838485" }}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});