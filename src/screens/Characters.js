import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Characters = ({ navigation }) => {
  return (
    <View>
      <Text>Characters</Text>
      <Button
        onPress={() => navigation.navigate('CharactersDetail')}
        title='Go To CharactersDetail'
      />
      <Button
        onPress={() => navigation.navigate('Favorites')}
        title='Go To Favories'
      />
    </View>
  );
};

const styles = StyleSheet.create({});
