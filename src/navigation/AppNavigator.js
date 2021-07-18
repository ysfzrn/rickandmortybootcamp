import * as React from 'react';
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
        }}
      />
      <Stack.Screen name='CharactersDetail' component={CharacterDetail} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <TabStack.Navigator tabBar={(props) => <MyTab {...props} />}>
        <TabStack.Screen name='Characters' component={CharactersNavigator} />
        <TabStack.Screen name='Favorites' component={Favorites} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
