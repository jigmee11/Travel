import {BlurView} from '@react-native-community/blur';
import React, {FC} from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import CarouselImage from '../../assets/CarouselImage.png';

interface Props {
  imgUrl: String;
}

const CarouselItem: FC<Props> = ({imgUrl}) => {
  // {name,imgUrl,star,description}
  return (
    <ImageBackground
      source={{uri: imgUrl}}
      // width={Dimensions.get('screen').width-40}
      style={styles.carouselContainer}
      imageStyle={{borderRadius: 10}} >
      <View style={{padding: 10, borderRadius: 100}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={styles.central}>
            <Svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M7.08983 2.90215L3.83983 1.27715L1.16671 2.42277V9.27377L3.91025 8.09836L7.16025 9.72336L9.83337 8.57665V1.72619L7.08983 2.9016V2.90215ZM0.0833741 1.70831L3.87504 0.083313L7.12504 1.70831L10.5392 0.245271C10.5804 0.227604 10.6253 0.220446 10.67 0.22444C10.7147 0.228434 10.7576 0.243455 10.7951 0.268154C10.8325 0.292853 10.8632 0.326459 10.8844 0.365954C10.9057 0.405449 10.9167 0.449597 10.9167 0.494438V9.29165L7.12504 10.9166L3.87504 9.29165L0.460916 10.7547C0.419702 10.7724 0.374747 10.7795 0.330085 10.7755C0.285422 10.7715 0.24245 10.7565 0.205025 10.7318C0.167601 10.7071 0.136894 10.6735 0.115661 10.634C0.0944285 10.5945 0.0833342 10.5504 0.0833741 10.5055V1.70831ZM2.25004 4.95831H3.33337V6.04165H2.25004V4.95831ZM4.41671 4.95831H5.50004V6.04165H4.41671V4.95831ZM7.66562 4.92419L8.33621 4.25415L8.91037 4.82831L8.24033 5.4989L8.91037 6.16948L8.33621 6.74365L7.66562 6.07361L6.99558 6.74365L6.42087 6.16948L7.09092 5.4989L6.42087 4.82885L6.99504 4.25415L7.66562 4.92419Z"
                fill="#D27C4A"
              />
            </Svg>
            <Text style={{color: '#D27C4A', marginLeft: 5}}>Centraal</Text>
          </View>
          <View style={styles.star}>
            <BlurView
              style={styles.absolute}
              blurType="light"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
            <Svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M4.66671 7.55037L1.79326 9.15882L2.43493 5.92889L0.0169678 3.69304L3.28723 3.30519L4.66671 0.314819L6.04619 3.30519L9.31645 3.69304L6.89849 5.92889L7.54015 9.15882L4.66671 7.55037Z"
                fill="white"
              />
            </Svg>
            <Text style={{paddingLeft: 10, color: 'white'}}>4.1</Text>
          </View>
        </View>
        <View style={{width:'100%', display:'flex',alignItems:'flex-end',marginTop:10}}>
          <View style={{backgroundColor:'black',padding:10,display:'flex',alignItems:'center',borderRadius:10}}>
            <Svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M6 11C3.2385 11 1 8.7615 1 6C1 3.2385 3.2385 1 6 1C8.7615 1 11 3.2385 11 6C11 8.7615 8.7615 11 6 11ZM6 10C7.06087 10 8.07828 9.57857 8.82843 8.82843C9.57857 8.07828 10 7.06087 10 6C10 4.93913 9.57857 3.92172 8.82843 3.17157C8.07828 2.42143 7.06087 2 6 2C4.93913 2 3.92172 2.42143 3.17157 3.17157C2.42143 3.92172 2 4.93913 2 6C2 7.06087 2.42143 8.07828 3.17157 8.82843C3.92172 9.57857 4.93913 10 6 10ZM6.5 6H8.5V7H5.5V3.5H6.5V6Z"
                fill="#C8C8C8"
              />
            </Svg>
            <Text style={{color:'white'}}>Closest</Text>
            <Text style={{color:'white'}}>7.35pm</Text>
          </View>
        </View>
        <View style={{marginBottom:10}}>
            <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>Taking a boat tour</Text>
            <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>through Canals</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  central: {
    padding: 4,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: '#FFF0D8',
    color: '#D27C4A',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
  },
  carouselContainer: {
      width:'100%'
  },
  header: {},
});

export default CarouselItem;
