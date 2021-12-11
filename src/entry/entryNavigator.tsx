import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstExplore from './firstExplore';
import Next from './next';

const Stack = createNativeStackNavigator();

const EntryNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstExplore"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstExplore" component={FirstExplore} />
        <Stack.Screen name="Next" component={Next} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default EntryNavigator;
