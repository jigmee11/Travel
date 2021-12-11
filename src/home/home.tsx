import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HomeHeader from './homeHeader';

const Home = () => {
  const data = [
    {
      name: 'ALL',
    },
    {
      name: 'MUSEUM',
    },
    {
      name: 'HISTORICAL PLACES',
    },
    {
      name: 'RESTAURANTS',
    },
  ];
  const [chosenMenu, setChosenMenu] = useState(0);
  return (
    <SafeAreaView style={{paddingLeft: 20, paddingRight: 20}}>
      <HomeHeader />
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.name}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={[
                styles.menuItemContainer,
                data[chosenMenu].name == item.name && styles.chosenMenuItem,
              ]}>
              <Text
                style={[
                  styles.menuItemText,
                  data[chosenMenu].name == item.name && styles.chosenMenuText,
                ]}>
                {item.name}
              </Text>
            </View>
          )}
        />
        <Carousel
          layout={'tinder'}
          layoutCardOffset={`18`}
          data={data}
          renderItem={({item}) => (
            <View style={{width: 200}}>
              <Text>lol</Text>
            </View>
          )}
          sliderWidth={100}
          itemWidth={100}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    marginRight: 10,
  },
  chosenMenuItem: {
    backgroundColor: '#D5E5E2',
  },
  menuItemText: {
    fontSize: 13,
  },
  chosenMenuText: {
    color: '#5B7D76',
  },
});

export default Home;
