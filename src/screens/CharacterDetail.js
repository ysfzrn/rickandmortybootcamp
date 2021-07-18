import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const CharacterDetail = ({ navigation }) => {
  return (
    <View>
      <Text>CharacterDetail</Text>
      <Button onPress={() => navigation.pop()} title='Go Back' />
    </View>
  );
};

const styles = StyleSheet.create({});
