import React, {createContext, FC, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const EntryContext = createContext();

const EntryProvider: FC = ({children}) => {
  const [entryShown, setEntryShown] = useState(false);
  const [chosenCity, setChosenCity] = useState();
  useEffect(() => {
    const check = async () => {
      const value = await AsyncStorage.getItem('entryShown');
      if (value !== null) {
        setEntryShown(true);
        setChosenCity(JSON.parse(value));
      }
    };
    check();
  }, []);
  return (
    <EntryContext.Provider
      value={{entryShown, setEntryShown, chosenCity, setChosenCity}}>
      {children}
    </EntryContext.Provider>
  );
};
export default EntryProvider;
