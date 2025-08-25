import { Dimensions, Platform } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const Layout = {
  window: {
    width: screenWidth,
    height: screenHeight,
  },
  isSmallDevice: screenWidth < 375,
  isTablet: screenWidth >= 768,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
};

export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
};

export const getResponsiveSpacing = (insets: EdgeInsets) => ({
  screenPadding: Math.max(insets.left, insets.right, Spacing.md),
  topSafeArea: Math.max(insets.top, Spacing.sm),
  bottomSafeArea: Math.max(insets.bottom, Spacing.sm),
  headerHeight: Layout.isIOS ? 44 + insets.top : 56 + insets.top,
  tabBarHeight: Layout.isIOS ? 49 + insets.bottom : 56 + insets.bottom,
});

export default Layout;