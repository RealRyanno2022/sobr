import React, { useEffect, useRef } from 'react';
import { Animated, Easing, TouchableWithoutFeedback, StyleSheet, ViewStyle } from 'react-native';

interface MenuSignHoverProps {
  children: React.ReactNode; // The icon or any other component to be animated
}

const MenuSignHover: React.FC<MenuSignHoverProps> = ({ children }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Create a loop animation
    const hoverAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: -6,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 6,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    hoverAnimation.start();

    return () => {
      hoverAnimation.stop(); // Stop the animation when the component unmounts
    };
  }, [animation]);

  const handlePressIn = () => {
    Animated.spring(scaleAnimation, {
      toValue: 1.1, // Scale up by 10%
      useNativeDriver: true,
      speed: 20,
      bounciness: 10,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnimation, {
      toValue: 1, // Return to original scale
      useNativeDriver: true,
      speed: 20,
      bounciness: 10,
    }).start();
  };

  // Explicitly typing animatedStyle
  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [{ translateY: animation }, { scale: scaleAnimation }],
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[animatedStyle, styles.container]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default MenuSignHover;
