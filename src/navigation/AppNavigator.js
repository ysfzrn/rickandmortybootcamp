import * as React from 'react';
import { StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Characters } from '../screens/Characters';
import { Favorites } from '../screens/Favorites';
import { CharacterDetail } from '../screens/CharacterDetail';
import LogoIcon from '../assets/logo.svg';
import { responsive } from '../util/responsive';
import { MyTab } from '../components';

const Stack = createStackNavigator();
const TabStack = createBottomTabNavigator();

function CharactersNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='CharactersHome'
        component={Characters}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <LogoIcon height={responsive.number(50)} />,
          headerStyle: styles.headerStyle
        }}
      />
      <Stack.Screen
      name='CharactersDetail'
      component={CharacterDetail}
      />
    </Stack.Navigator>
  );
}

function FavoritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='FavoritesHome'
        component={Favorites}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <LogoIcon height={responsive.number(50)} />,
          headerStyle: styles.headerStyle
        }}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <TabStack.Navigator tabBar={(props) => <MyTab {...props} />}>
        <TabStack.Screen name='Characters' component={CharactersNavigator} />
        <TabStack.Screen name='Favorites' component={FavoritesNavigator} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
})

export default AppNavigator;
