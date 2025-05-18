import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Animated} from 'react-native';
import {RootStackParamList} from '../../../global.interface';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const DrawerContent = ({toggleDrawer}: {toggleDrawer: () => void}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const topAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(topAnim, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [topAnim]);

  const navigateTo = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
    toggleDrawer();
  };

  return (
    <Animated.View style={[styles.animatedContainer, {top: topAnim}]}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Menu</Text>
      </View>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateTo('Home')}>
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateTo('Settings')}>
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'purple',
    paddingTop: 50,
    borderRadius: 20,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  drawerHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#34495e',
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ecf0f1',
  },
  drawerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#34495e',
  },
  drawerItemText: {
    fontSize: 16,
    color: '#ecf0f1',
  },
});

export default DrawerContent;
