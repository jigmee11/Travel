import {BlurView} from '@react-native-community/blur';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Dimensions} from 'react-native';
import React, {useCallback, useContext, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FirstCity from '../../assets/firstCity.png';
import SecondCity from '../../assets/SecondCity.png';
import {EntryContext} from '../../context/entryProvider';

const Next = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {setEntryShown, setChosenCity} = useContext(EntryContext);
  const data = [
    {
      url: FirstCity,
      name: 'LONDON',
    },
    {
      url: SecondCity,
      name: 'AMSTERDAM',
    },
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setImageIndex(roundIndex);
  }, []);
  return (
    <ImageBackground
      source={data[imageIndex].url}
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{paddingLeft: 20, paddingRight: 20, flex: 1}}>
        <View style={styles.topBox}>
          <Text style={styles.topBoxText}>LET'S GO!</Text>
        </View>
        <View style={styles.midBox}>
          <Text style={{color: 'black', fontSize: 40}}>Choose</Text>
          <Text style={{color: 'black', fontSize: 40}}>your city</Text>
        </View>
        <View style={styles.imageSliderContainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.name}
            pagingEnabled={true}
            horizontal={true}
            onScroll={onScroll}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: windowWidth - 60,
                }}>
                <Image source={item.url} style={styles.listImage} />
                <View style={styles.textContainer}>
                  <Text style={styles.cityName}>{item.name}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <Pressable
          style={styles.exploreView}
          onPress={async () => {
            const name = JSON.stringify(data[imageIndex].name);
            await AsyncStorage.setItem('entryShown', name);
            setChosenCity(data[imageIndex].name);
            setEntryShown(true);
          }}>
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
            EXPLORE THE CITY
          </Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  topBox: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#E5E4DF',
    borderBottomWidth: 1,
  },
  topBoxText: {
    color: '#EA8246',
    fontWeight: 'bold',
  },
  midBox: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  exploreView: {
    width: '100%',
    height: 75,
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
  },
  listImage: {
    flex: 1,
  },
  imageSliderContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 30,
    marginTop: 20,
  },
  cityName: {
    fontSize: 25,
  },
  textContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
});

export default Next;
