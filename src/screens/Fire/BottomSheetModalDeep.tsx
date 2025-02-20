import styled from 'styled-components';
import React, { useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Button = styled(TouchableOpacity)`
  background-color: #6200ee;
  padding: 15px 30px;
  border-radius: 5px;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 16px;
`;

const ContentContainer = styled(View)`
  padding: 20px;
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled(Text)`
  font-size: 16px;
  color: #666;
`;
export const BottomSheetModalDeep = ()=> {
  const bottomSheetModalRef = useRef<any>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleCloseModal = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <BottomSheetModalProvider>
      <Container>
        <Button onPress={handlePresentModal}>
          <ButtonText>Abrir Modal 222</ButtonText>
        </Button>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
        >
          <ContentContainer>
            <Title>Modal Title</Title>
            <Description>
              Este é um exemplo de modal usando BottomSheetModal e styled-components.
            </Description>
            <Button onPress={handleCloseModal}>
              <ButtonText>Fechar Modal</ButtonText>
            </Button>
          </ContentContainer>
        </BottomSheetModal>
      </Container>
    </BottomSheetModalProvider>
  );
};