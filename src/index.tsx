import React, {useContext} from 'react';
import {Text} from 'react-native';
import {EntryContext} from '../context/entryProvider';
import EntryNavigator from './entry/entryNavigator';
import Home from './home/home';

const Index = () => {
  const {entryShown} = useContext(EntryContext);
  return entryShown ? <Home /> : <EntryNavigator />;
};
export default Index;
