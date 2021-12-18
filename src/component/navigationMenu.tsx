import {transform} from '@babel/core';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Pressable, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const NavigationMenu = ({navigation,id}) => {
  const [show, setShow] = useState(false);
  const widthAnime = useRef(new Animated.Value(1)).current;
  console.log(id);
  React.useEffect(() => {
    if (!show) return;
    Animated.timing(widthAnime, {
      useNativeDriver: true,
      toValue: (Dimensions.get('screen').width-40)/60,
      duration: 1000,
    }).start();
  }, [show]);
  return (
    <Animated.View
      style={{
        position: 'absolute',
        transform:[{scaleX:widthAnime}],
        bottom: 40,
        right:  30,
        zIndex: 20,
        backgroundColor: 'black',
        padding: 15,
        width:60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 30,
      }}>
      <Pressable onPress={() => navigation.navigate('Detail',{id:id})}>
        <Svg
          width="29"
          height="19"
          viewBox="0 0 29 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M1.33923 1.125H27.6607"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <Path
            d="M1.33923 9.5H18.8869"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <Path
            d="M23.2738 9.5L27.6607 9.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <Path
            d="M1.33923 17.875H27.6607"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </Svg>
      </Pressable>
    </Animated.View>
  );
};
export default NavigationMenu;
