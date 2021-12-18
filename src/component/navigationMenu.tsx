import {transform} from '@babel/core';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Pressable, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const NavigationMenu = ({navigation, id}) => {
  const [show, setShow] = useState(false);
  const bigAnimation = useRef(new Animated.Value(0)).current;
  const width = bigAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [60, Dimensions.get('window').width - 40],
  });
  const height = bigAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [60, 200],
  });
  const firstMenuOpacity = bigAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const makeBigger = () => {
    setShow(true);
    Animated.timing(bigAnimation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 1000,
    }).start();
  };
  const makeSmaller = () => {
    Animated.timing(bigAnimation, {
      useNativeDriver: false,
      toValue: 0,
      duration: 1000,
    }).start(() => setShow(false));
  };
  return (
    <Pressable onPress={() => makeBigger()}>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 20,
          backgroundColor: 'black',
          padding: 15,
          width: width,
          height: height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: show ? 'space-between' : 'center',
          borderRadius: 30,
        }}>
        {show && (
          <Animated.View
            style={{
              width: '100%',
              opacity: bigAnimation,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: '#232323',
              borderBottomWidth: 1,
              paddingBottom: 15,
            }}>
            <Pressable
              onPress={() => {
                makeSmaller();
                navigation.navigate('Detail', {id: id});
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 10,
                  backgroundColor: '#232323',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <Svg
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M-0.00109858 14.7327C-0.00130098 16.8917 0.61882 19.0052 1.78546 20.8218C2.9521 22.6384 4.61612 24.0815 6.57948 24.9794C8.54283 25.8773 10.7228 26.1922 12.86 25.8865C14.9972 25.5809 17.0016 24.6676 18.6346 23.2554C20.2676 21.8432 21.4604 19.9915 22.0711 17.9208C22.6819 15.85 22.6847 13.6474 22.0794 11.5751C21.4741 9.50271 20.2861 7.64792 18.6568 6.23145C17.0275 4.81498 15.0256 3.89647 12.8892 3.58525C13.2368 3.19426 13.4297 2.68977 13.4317 2.16658C13.4317 1.59197 13.2034 1.04089 12.7971 0.634576C12.3908 0.228264 11.8397 0 11.2651 0C10.6905 0 10.1394 0.228264 9.73311 0.634576C9.32679 1.04089 9.09853 1.59197 9.09853 2.16658C9.10047 2.68977 9.29339 3.19426 9.64104 3.58525C6.96429 3.97855 4.51799 5.32064 2.74807 7.36688C0.978151 9.41311 0.00247814 12.0272 -0.00109858 14.7327V14.7327ZM9.96516 2.16658C9.96516 1.90947 10.0414 1.65814 10.1842 1.44437C10.3271 1.23059 10.5301 1.06397 10.7676 0.965584C11.0052 0.867194 11.2665 0.841451 11.5187 0.891609C11.7709 0.941768 12.0025 1.06558 12.1843 1.24738C12.3661 1.42918 12.4899 1.66081 12.5401 1.91297C12.5902 2.16514 12.5645 2.42651 12.4661 2.66405C12.3677 2.90158 12.2011 3.1046 11.9873 3.24744C11.7735 3.39028 11.5222 3.46652 11.2651 3.46652C10.9203 3.46652 10.5897 3.32957 10.3459 3.08578C10.1021 2.84199 9.96516 2.51135 9.96516 2.16658ZM11.2651 4.33316C13.3219 4.33316 15.3326 4.94308 17.0428 6.0858C18.753 7.22852 20.0859 8.85271 20.8731 10.753C21.6602 12.6533 21.8661 14.7443 21.4649 16.7616C21.0636 18.7789 20.0731 20.6319 18.6187 22.0863C17.1643 23.5407 15.3113 24.5312 13.294 24.9325C11.2766 25.3337 9.18564 25.1278 7.28536 24.3407C5.38509 23.5536 3.7609 22.2206 2.61818 20.5104C1.47546 18.8002 0.865533 16.7896 0.865533 14.7327C0.868744 11.9756 1.96544 9.33227 3.91504 7.38267C5.86465 5.43306 8.50795 4.33637 11.2651 4.33316V4.33316Z"
                    fill="white"
                  />
                  <Path
                    d="M11.2652 23.8323C13.0649 23.8323 14.8242 23.2986 16.3206 22.2988C17.8171 21.2989 18.9834 19.8777 19.6721 18.215C20.3608 16.5522 20.541 14.7226 20.1899 12.9574C19.8388 11.1923 18.9722 9.57089 17.6996 8.29828C16.427 7.02567 14.8056 6.15902 13.0404 5.80791C11.2752 5.4568 9.44562 5.637 7.78288 6.32573C6.12014 7.01446 4.69897 8.18078 3.69909 9.67721C2.69921 11.1736 2.16553 12.933 2.16553 14.7327C2.16828 17.1452 3.12787 19.4581 4.83379 21.1641C6.5397 22.87 8.85263 23.8296 11.2652 23.8323ZM11.2652 6.49969C12.8935 6.49969 14.4853 6.98255 15.8392 7.8872C17.1931 8.79186 18.2483 10.0777 18.8715 11.5821C19.4946 13.0864 19.6576 14.7418 19.34 16.3389C19.0223 17.9359 18.2382 19.4029 17.0868 20.5543C15.9354 21.7057 14.4684 22.4898 12.8713 22.8075C11.2743 23.1252 9.61891 22.9621 8.11452 22.339C6.61014 21.7158 5.32432 20.6606 4.41967 19.3067C3.51502 17.9528 3.03216 16.361 3.03216 14.7327C3.03457 12.5499 3.90274 10.4572 5.44621 8.91374C6.98967 7.37028 9.08237 6.5021 11.2652 6.49969Z"
                    fill="white"
                  />
                  <Path
                    d="M8.47583 15.166L6.12249 19.2825C6.07414 19.3652 6.05456 19.4616 6.06681 19.5566C6.07905 19.6516 6.12243 19.7399 6.19017 19.8076C6.2579 19.8753 6.34617 19.9187 6.44118 19.931C6.53619 19.9432 6.63257 19.9236 6.71527 19.8753L10.8318 17.5219V21.6657C10.8318 21.9051 11.0258 22.0991 11.2651 22.0991C11.5044 22.0991 11.6984 21.9051 11.6984 21.6657V17.0267L12.4927 16.573L15.8611 19.9414C16.0303 20.1107 16.3048 20.1106 16.4741 19.9413C16.6432 19.772 16.6432 19.4977 16.4739 19.3285L13.1054 15.9603L13.5591 15.166H17.7648C18.0041 15.166 18.1981 14.972 18.1981 14.7327C18.1981 14.4934 18.0041 14.2994 17.7648 14.2994H14.0543L16.4077 10.1829C16.456 10.1002 16.4756 10.0038 16.4634 9.9088C16.4511 9.81379 16.4077 9.72552 16.34 9.65778C16.2723 9.59005 16.184 9.54667 16.089 9.53442C15.994 9.52218 15.8976 9.54176 15.8149 9.59011L11.6984 11.9434V7.79965C11.6984 7.56033 11.5044 7.36633 11.2651 7.36633C11.0258 7.36633 10.8318 7.56034 10.8318 7.79965V12.4387L10.0375 12.8924L6.66911 9.52402C6.49982 9.35473 6.22533 9.35478 6.0561 9.52413C5.88694 9.6934 5.887 9.96774 6.05622 10.1369L9.42479 13.5051L8.97111 14.2994H4.76535C4.52603 14.2994 4.33203 14.4934 4.33203 14.7327C4.33203 14.972 4.52603 15.166 4.76535 15.166H8.47583ZM14.8668 11.131L12.2474 15.715L7.66336 18.3344L10.2828 13.7504L14.8668 11.131Z"
                    fill="white"
                  />
                  <Path
                    d="M11.6984 14.2994H10.8318V15.1661H11.6984V14.2994Z"
                    fill="white"
                  />
                </Svg>
                <Text style={{color: 'white', fontSize: 10, marginTop: 10}}>
                  DISCOVER
                </Text>
              </View>
            </Pressable>
          </Animated.View>
        )}
        {show && (
          <Animated.View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: 20,
              width: Dimensions.get('screen').width - 40 - 60,
              borderColor: '#232323',
            }}>
            <Svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M7.99996 12.3233L10.8286 9.4953C11.388 8.93586 11.7689 8.22313 11.9232 7.44723C12.0774 6.67132 11.9982 5.86709 11.6954 5.13622C11.3926 4.40536 10.88 3.78068 10.2222 3.34119C9.56439 2.90169 8.79106 2.66711 7.99996 2.66711C7.20887 2.66711 6.43553 2.90169 5.77775 3.34119C5.11997 3.78068 4.60728 4.40536 4.30451 5.13622C4.00174 5.86709 3.92249 6.67132 4.07677 7.44723C4.23106 8.22313 4.61195 8.93586 5.1713 9.4953L7.99996 12.3233ZM11.7713 10.438L7.99996 14.2093L4.22863 10.438C3.48278 9.69208 2.97485 8.74177 2.76909 7.70721C2.56332 6.67265 2.66896 5.60031 3.07263 4.62579C3.47631 3.65126 4.15989 2.81833 5.03695 2.23231C5.91401 1.64628 6.94514 1.3335 7.99996 1.3335C9.05478 1.3335 10.0859 1.64628 10.963 2.23231C11.84 2.81833 12.5236 3.65126 12.9273 4.62579C13.331 5.60031 13.4366 6.67265 13.2308 7.70721C13.0251 8.74177 12.5171 9.69208 11.7713 10.438ZM3.3333 14.6666H12.6666V16H3.3333V14.6666Z"
                fill="#FCFCFC"
              />
            </Svg>
            <Text style={{color: 'white'}}>CHANGE CITY</Text>
          </Animated.View>
        )}
        {show ? (
          <Pressable
            style={{position: 'absolute', right: 15, bottom: 21}}
            onPress={() => makeSmaller()}>
            <Animated.View style={{opacity: bigAnimation}}>
              <Svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M27.9058 27.9058L9.57149 9.57149"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <Path
                  d="M9.77356 28.1079L28.1078 9.77364"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </Svg>
            </Animated.View>
          </Pressable>
        ) : (
          <Animated.View
            style={{
              opacity: firstMenuOpacity,
              position: 'absolute',
              right: 15,
              bottom: 21,
            }}>
            <Svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
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
          </Animated.View>
        )}
      </Animated.View>
    </Pressable>
  );
};
export default NavigationMenu;
