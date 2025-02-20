import { View } from "react-native"
import styled from "styled-components"
import React, { useCallback, useMemo, useRef } from "react"
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop } from "@gorhom/bottom-sheet"

const StyledBottomSheetModal = styled(BottomSheetModal)`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const ContentContainer = styled(View)`
  flex: 1;
  padding: 20px;
`

interface BottomSheetProps {
  isVisible: boolean
  onClose: () => void
  children: React.ReactNode
  snapPoints?: string[]
}

export const CustomBottomSheetModal: React.FC<BottomSheetProps> = ({
  isVisible,
  onClose,
  children,
  snapPoints = ["50%", "75%"],
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose()
      }
    },
    [onClose],
  )

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />,
    [],
  )

  const memoizedSnapPoints = useMemo(() => snapPoints, [snapPoints])

  React.useEffect(() => {
    if (isVisible) {
      handlePresentModalPress()
    } else {
      bottomSheetModalRef.current?.dismiss()
    }
  }, [isVisible, handlePresentModalPress])

  return (
    <BottomSheetModalProvider>
      <StyledBottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={memoizedSnapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <ContentContainer>{children}</ContentContainer>
      </StyledBottomSheetModal>
    </BottomSheetModalProvider>
  )
}

