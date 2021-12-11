import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {EntryContext} from '../../context/entryProvider';

const HomeHeader = () => {
  const {chosenCity} = useContext(EntryContext);
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Text style={{fontSize: 25}}>Discover,</Text>
        <Text style={{fontSize: 25, marginTop: 10, fontWeight: 'bold'}}>
          {chosenCity}!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#F4F1EC',
          borderRadius: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 45,
          height: 45,
        }}>
        <Svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M9.16663 1.66669C13.3066 1.66669 16.6666 5.02669 16.6666 9.16669C16.6666 13.3067 13.3066 16.6667 9.16663 16.6667C5.02663 16.6667 1.66663 13.3067 1.66663 9.16669C1.66663 5.02669 5.02663 1.66669 9.16663 1.66669ZM9.16663 15C12.3891 15 15 12.3892 15 9.16669C15 5.94335 12.3891 3.33335 9.16663 3.33335C5.94329 3.33335 3.33329 5.94335 3.33329 9.16669C3.33329 12.3892 5.94329 15 9.16663 15ZM16.2375 15.0592L18.595 17.4159L17.4158 18.595L15.0591 16.2375L16.2375 15.0592Z"
            fill="#404040"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeHeader;
