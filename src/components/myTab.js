import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { responsive } from '../util/responsive';
import CharactersSelectedIcon from '../assets/tab-characters-selected.svg';
import CharactersUnSelectedIcon from '../assets/tab-characters-unselected.svg';
import FavoritesSelectedIcon from '../assets/tab-favorites-selected.svg';
import FavoritesUnSelectedIcon from '../assets/tab-favorites-unselected.svg';

export const MyTab = ({ state, navigation }) => {
  const { index: currentIndex } = state || {};
  const { bottom } = useSafeAreaInsets();

  const containerStyle = {
    height: responsive.number(56) + bottom,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TabButton
        onPress={() => navigation.navigate('Characters')}
        tabIcon={
          currentIndex === 0 ? CharactersSelectedIcon : CharactersUnSelectedIcon
        }
      />
      <TabButton
        onPress={() => navigation.navigate('Favorites')}
        tabIcon={
          currentIndex === 1 ? FavoritesSelectedIcon : FavoritesUnSelectedIcon
        }
      />
    </View>
  );
};

const TabButton = ({ tabIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.tabButtonContainer} onPress={onPress}>
      {tabIcon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  tabButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
