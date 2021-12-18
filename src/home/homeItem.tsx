import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from './carouseltem';
import HomeHeader from './homeHeader';
import {useQuery, gql} from '@apollo/client';
import ActivityItem from './activityItem';

type CategoryType = {
  name: string;
};

type CategoriesType = {
  categoryCollection: {
    items: CategoryType[];
  };
};

const HomeItem = ({category = 'Restaurants'}) => {
  if (category == undefined) {
    return <Text>noob</Text>;
  }
  const ACTIVITY_SEARCH = gql`
    query ($category: String) {
      activityCollection(where: {category: {name: $category}}) {
        items {
          title
          rate
          category {
            name
          }
          image {
            url
            width
            height
          }
          sys {
            id
          }
        }
      }
    }
  `;

  const {error, data, loading} = useQuery<CategoriesType>(ACTIVITY_SEARCH, {
    variables: {category: category},
  });
  return (
    <View>
      <Text
        style={{
          color: '#666462',
          fontSize: 20,
          marginTop: 15,
          marginBottom: 15,
        }}>
        Top activities
      </Text>
      <Carousel
        layout={'stack'}
        layoutCardOffset={18}
        data={data?.activityCollection?.items || []}
        renderItem={item => (
          <CarouselItem imgUrl="https://www.goworldtravel.com/wp-content/uploads/2017/07/travel-venice-italy.jpg" />
        )}
        sliderWidth={Dimensions.get('screen').width - 40}
        itemWidth={Dimensions.get('screen').width - 60}
      />
      <Text style={{marginTop: 30}}>Nearby activities</Text>
      <View>
        <FlatList
          nestedScrollEnabled={true}
          renderItem={({item}) => <ActivityItem {...item} />}
          keyExtractor={item => item.sys.id}
          data={data?.activityCollection?.items}
        />
      </View>
    </View>
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

export default HomeItem;
