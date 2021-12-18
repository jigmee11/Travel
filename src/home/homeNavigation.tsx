import React, {createContext} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './home';
import Detail from './detail';

const Stack = createNativeStackNavigator();

export const NavigationContext = createContext();

const HomeNavigation = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContext.Provider value={{navigationRef}}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Detail"
            component={Detail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationContext.Provider>
  );
};
export default HomeNavigation;
