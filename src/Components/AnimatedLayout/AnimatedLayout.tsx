import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import DrawerContent from '../DrawerContent/DrawerContent';

const AnimatedLayout = ({
  children,
  toggleDrawer,
  active,
  isDrawerVisible,
}: {
  children: React.ReactNode;
  toggleDrawer: () => void;
  active: SharedValue<boolean>;
  isDrawerVisible: boolean;
}) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transformOrigin: 'top right',
      transform: [
        {rotate: withTiming(active.value ? '-10deg' : '0deg')},
        {scale: withTiming(active.value ? 0.9 : 1)},
        {translateX: withTiming(active.value ? 100 : 0)},
      ],
    };
  });

  return (
    <View style={styles.container}>
      {isDrawerVisible && <DrawerContent toggleDrawer={toggleDrawer} />}
      <Animated.View style={[animatedStyles, styles.contentContainer]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default AnimatedLayout;
