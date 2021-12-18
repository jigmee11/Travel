import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
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
import HomeItem from './homeItem';
import NavigationMenu from '../component/navigationMenu';

const CATEGORIES = gql`
  query {
    categoryCollection {
      items {
        name
      }
    }
  }
`;

const ACTIVITY_SEARCH = gql`
  query {
    activityCollection {
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

type CategoryType = {
  name: string;
};

type CategoriesType = {
  categoryCollection: {
    items: CategoryType[];
  };
};

const Home = ({navigation}) => {
  const {error, data, loading} = useQuery<CategoriesType>(CATEGORIES);
  const activities = useQuery(ACTIVITY_SEARCH);
  const [chosenMenu, setChosenMenu] = useState(0);
  return (
    <>
      <SafeAreaView style={{paddingLeft: 20, paddingRight: 20}}>
        <HomeHeader />
        <View>
          <FlatList
            data={data?.categoryCollection.items}
            keyExtractor={item => item.name}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <Pressable onPress={() => setChosenMenu(index)}>
                <View
                  style={[
                    styles.menuItemContainer,
                    data?.categoryCollection.items[chosenMenu].name ==
                      item.name && styles.chosenMenuItem,
                  ]}>
                  <Text
                    style={[
                      styles.menuItemText,
                      data?.categoryCollection.items[chosenMenu].name ==
                        item.name && styles.chosenMenuText,
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
          />
          <HomeItem
            category={data?.categoryCollection.items[chosenMenu].name}
          />
        </View>
      </SafeAreaView>
      <NavigationMenu navigation={navigation} id={data?.categoryCollection?.items[chosenMenu].name}/>
    </>
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
// import React from "react";
// import { Text } from "react-native";
// import {useQuery, gql} from '@apollo/client';

// const CATEGORIES = gql`
//   query {
//     categoryCollection {
//       items {
//         name
//       }
//     }
//   }
// `;

// const Home = () =>{
//   const {error, data, loading} = useQuery(CATEGORIES);

//   return(
//     <Text>lol</Text>
//   );
// }
// export default Home;
