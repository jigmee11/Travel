import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BgImage from '../../assets/entryWoman.png';

const Next = ({navigation}) => {
  return (
    <ImageBackground source={BgImage} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{paddingLeft: 20, paddingRight: 20, flex: 1}}>
        <View style={styles.topBox}>
          <Text style={styles.topBoxText}>LET'S GO!</Text>
        </View>
        <View style={styles.midBox}>
          <Text style={{color: '#72978F', fontSize: 40}}>Hello,</Text>
          <Text style={{color: 'black', fontSize: 40}}>Leonard!</Text>
        </View>
        <View style={styles.exploreBtn}>
          <Pressable
            style={styles.exploreView}
            onPress={() => navigation.navigate('Next')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>EXPLORE</Text>
          </Pressable>
        </View>
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
  exploreBtn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  exploreView: {
    width: '100%',
    height: 75,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Next;
