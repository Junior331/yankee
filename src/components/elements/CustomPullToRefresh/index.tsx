import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import styled from 'styled-components/native';

const Container = styled(View)<{ visible: boolean }>`
  height: ${({ visible }) => (visible ? '60px' : '0px')};
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const LoadingContainer = styled(View)`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

interface CustomPullToRefreshProps {
  refreshing: boolean;
  onRefresh?: () => void;
}

export const CustomPullToRefresh: React.FC<CustomPullToRefreshProps> = ({ refreshing }) => {
  const spinValue = useRef(new Animated.Value(0));
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (refreshing) {
      // Start continuous rotation
      animationRef.current = Animated.loop(
        Animated.timing(spinValue.current, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
      animationRef.current.start();
    } else {
      // Stop animation and reset
      if (animationRef.current) {
        animationRef.current.stop();
      }
      spinValue.current.setValue(0);
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [refreshing]);

  const spin = spinValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!refreshing) return null;

  return (
    <Container visible={refreshing}>
      <LoadingContainer>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Svg width="30" height="30" viewBox="0 0 30 30">
            <Circle
              cx="15"
              cy="15"
              r="12"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="6 4"
              strokeLinecap="round"
              fill="transparent"
            />
          </Svg>
        </Animated.View>
      </LoadingContainer>
    </Container>
  );
};