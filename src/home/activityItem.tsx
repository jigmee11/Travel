import {BlurView} from '@react-native-community/blur';
import React, {FC, useContext} from 'react';
import {
  Dimensions,
  ImageBackground,
  ImageBase,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {NavigationContext} from './homeNavigation';

interface Props {
  title: Text;
  rate: Number;
  category: {name: Text};
  sys: {id: Text};
  image: {url: Text; width: number; height: number};
}

const ActivityItem: FC<Props> = ({rate, image, sys, title}) => {
  const windowWidth = Dimensions.get('window').width;
  const height = image.height / (image.width / windowWidth);
  const {navigationRef} = useContext(NavigationContext);
  return (
    <Pressable onPress={() => navigationRef.navigate('Detail', {id: sys.id})}>
      <ImageBackground
        source={{uri: image.url}}
        style={{width: Dimensions.get('window').width - 40, height: height}}
        imageStyle={{borderRadius: 8}}>
        <View style={{flex: 1, display: 'flex', alignItems: 'flex-end'}}>
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
      <Text>{title}</Text>
      <Text>
        <Svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M7.475 6.97496C7.96445 6.48546 8.29776 5.86182 8.43278 5.1829C8.5678 4.50397 8.49846 3.80026 8.23355 3.16074C7.96863 2.52122 7.52002 1.97461 6.94446 1.59005C6.3689 1.20548 5.69222 1.00021 5 1.00021C4.30778 1.00021 3.63111 1.20548 3.05554 1.59005C2.47998 1.97461 2.03138 2.52122 1.76646 3.16074C1.50154 3.80026 1.43221 4.50397 1.56723 5.1829C1.70225 5.86182 2.03555 6.48546 2.525 6.97496L5 9.44996L7.475 6.97496ZM5 10.864L1.818 7.68196C1.18867 7.05262 0.760093 6.2508 0.586464 5.37789C0.412835 4.50497 0.501953 3.60018 0.842549 2.77791C1.18315 1.95565 1.75992 1.25285 2.49994 0.758383C3.23996 0.263919 4.10999 0 5 0C5.89002 0 6.76004 0.263919 7.50006 0.758383C8.24008 1.25285 8.81686 1.95565 9.15745 2.77791C9.49805 3.60018 9.58717 4.50497 9.41354 5.37789C9.23991 6.2508 8.81133 7.05262 8.182 7.68196L5 10.864ZM5.5 4.49996H7.5V5.49996H4.5V1.99996H5.5V4.49996Z"
            fill="#5B7D76"
          />
        </Svg>{' '}
        12 min
      </Text>
    </Pressable>
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
