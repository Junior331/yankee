import { Dimensions, PixelRatio, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Base dimensions (iPhone 14 Pro)
const baseWidth = 393;

export const wp = (percentage: number): number => {
  const value = (percentage * screenWidth) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

export const hp = (percentage: number): number => {
  const value = (percentage * screenHeight) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

export const normalize = (size: number): number => {
  const scale = screenWidth / baseWidth;
  const newSize = size * scale;
  
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const isTablet = (): boolean => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = screenWidth * pixelDensity;
  const adjustedHeight = screenHeight * pixelDensity;
  
  return (adjustedWidth >= 1000 || adjustedHeight >= 1000) && pixelDensity < 2;
};

export const useResponsivePadding = () => {
  const insets = useSafeAreaInsets();
  
  return {
    paddingTop: Math.max(insets.top, hp(2)),
    paddingBottom: Math.max(insets.bottom, hp(1)),
    paddingLeft: Math.max(insets.left, wp(4)),
    paddingRight: Math.max(insets.right, wp(4)),
  };
};

export const getScreenDimensions = () => ({
  width: screenWidth,
  height: screenHeight,
  isLandscape: screenWidth > screenHeight,
  isPortrait: screenHeight > screenWidth,
  isSmallScreen: screenHeight < 700,
  isLargeScreen: screenHeight > 900,
});