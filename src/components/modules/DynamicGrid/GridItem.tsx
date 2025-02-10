import React from "react"
import styled from "styled-components"
import { Image, View } from "react-native"
import { BORDER_RADIUS, LARGE_IMAGE_HEIGHT, SMALL_IMAGE_HEIGHT } from "./utils"
import type { GridItemProps } from "./@types"

const StyledGridItem = styled(View)<GridItemProps>`
  flex: 1 0 5px;
  overflow: hidden;
  border-radius: ${BORDER_RADIUS}px;
  height: ${({ isLarge, isSingle }) => (isSingle || isLarge ? LARGE_IMAGE_HEIGHT : SMALL_IMAGE_HEIGHT)}px;
  width: ${({ isLarge, isSingle }) => {
    if (isSingle) return "100%"
    return isLarge ? "48%" : "100%"
  }};
`

const GridItem: React.FC<GridItemProps & { uri: string }> = React.memo(({ isLarge, isSingle, uri }) => (
  <StyledGridItem isLarge={isLarge} isSingle={isSingle}>
    <Image source={{ uri }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
  </StyledGridItem>
))

export default GridItem

