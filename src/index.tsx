import React, {useContext} from 'react';
import {ScrollView, Text} from 'react-native';
import {EntryContext} from '../context/entryProvider';
import EntryNavigator from './entry/entryNavigator';
import Home from './home/home';
import HomeNavigation from './home/homeNavigation';

const Index = () => {
  const {entryShown} = useContext(EntryContext);
  return entryShown ? <HomeNavigation/> : <EntryNavigator />;
};
export default Index;
