import {BlurView} from '@react-native-community/blur';
import React, {FC} from 'react';
import {Dimensions, ImageBackground, ImageBase, StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface Props {
  title: Text;
  rate: Number;
  category: {name: Text};
  image: {url: Text; width: number; height: number};
}

const ActivityItem: FC<Props> = ({rate, image,}) => {
  const windowWidth = Dimensions.get('window').width;
  const height = image.height/(image.width/windowWidth);
  return (
    <View>
      <ImageBackground
        source={{uri: image.url}}
        style={{width:Dimensions.get('window').width-40,height:height}} imageStyle={{borderRadius:8}}>
        <View style={{flex:1,display:"flex",alignItems:'flex-end'}}>
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
            <Text style={{paddingLeft: 10, color: 'white'}}>{rate}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ActivityItem;
