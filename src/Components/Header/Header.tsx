import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import MenuIcon from '../../Icons/MenuIcon';

const Header = ({toggleDrawer}: {toggleDrawer: () => void}) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={toggleDrawer}>
        <MenuIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default Header;
