import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';
import HeaderImage from '../../assets/Image.png';

const Detail = ({route}) => {
  const {id} = route.params;
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <StatusBar
          animated={false}
          backgroundColor="white"
          barStyle={'default'}
          showHideTransition={'none'}
          hidden={true}
        />
        <Image source={HeaderImage} style={{width: '100%', height: 450}} />
        <View
          style={{
            position: 'absolute',
            top: 50,
            left: 20,
            width: 30,
            height: 30,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          }}>
          <Svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M7.4999 15.225C7.34157 15.225 7.18324 15.1667 7.05824 15.0417L1.6249 9.60835C0.741569 8.72502 0.741569 7.27502 1.6249 6.39168L7.05824 0.95835C7.2999 0.716683 7.6999 0.716683 7.94157 0.95835C8.18324 1.20002 8.18324 1.60002 7.94157 1.84168L2.50824 7.27502C2.10824 7.67502 2.10824 8.32502 2.50824 8.72502L7.94157 14.1583C8.18324 14.4 8.18324 14.8 7.94157 15.0417C7.81657 15.1584 7.65824 15.225 7.4999 15.225Z"
              fill="#292D32"
            />
          </Svg>
        </View>
        <View style={{padding: 20}}>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 30}}>I Amsterdam</Text>
              <Text>
                <Svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M4.375 0.0078125C1.95825 0.0078125 0 1.95819 0 4.37406C0 8.55131 4.375 13.9991 4.375 13.9991C4.375 13.9991 8.75 8.55044 8.75 4.37406C8.75 1.95906 6.79175 0.0078125 4.375 0.0078125ZM4.375 6.78994C3.74843 6.78994 3.14751 6.54103 2.70446 6.09798C2.26141 5.65492 2.0125 5.05401 2.0125 4.42744C2.0125 3.80086 2.26141 3.19995 2.70446 2.7569C3.14751 2.31384 3.74843 2.06494 4.375 2.06494C5.00157 2.06494 5.60249 2.31384 6.04554 2.7569C6.48859 3.19995 6.7375 3.80086 6.7375 4.42744C6.7375 5.05401 6.48859 5.65492 6.04554 6.09798C5.60249 6.54103 5.00157 6.78994 4.375 6.78994Z"
                    fill="black"
                  />
                </Svg>
                <Text style={{paddingLeft: 10}}>Historical Places</Text>
              </Text>
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }}>
              <Svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M15.5904 1.9476C15.1807 1.53774 14.6943 1.21261 14.159 0.990786C13.6236 0.768959 13.0498 0.654785 12.4703 0.654785C11.8908 0.654785 11.317 0.768959 10.7816 0.990786C10.2463 1.21261 9.75987 1.53774 9.3502 1.9476L8.49999 2.79781L7.64979 1.9476C6.82228 1.1201 5.69995 0.655214 4.52968 0.655214C3.35942 0.655214 2.23708 1.1201 1.40958 1.9476C0.582074 2.77511 0.117188 3.89744 0.117188 5.06771C0.117187 6.23797 0.582074 7.36031 1.40958 8.18781L2.25978 9.03802L8.49999 15.2782L14.7402 9.03802L15.5904 8.18781C16.0003 7.77814 16.3254 7.29174 16.5472 6.75638C16.7691 6.22102 16.8832 5.6472 16.8832 5.06771C16.8832 4.48821 16.7691 3.9144 16.5472 3.37904C16.3254 2.84368 16.0003 2.35727 15.5904 1.9476Z"
                  fill="white"
                />
              </Svg>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View
                style={{
                  marginRight: 10,
                  width: 35,
                  height: 35,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 35,
                  borderColor: 'black',
                  borderWidth: 1,
                }}>
                <Svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M16.4956 6.6283L11.4456 5.89817L9.18807 1.34525C9.12641 1.2206 9.02497 1.11968 8.89967 1.05835C8.58541 0.904009 8.20352 1.03262 8.0464 1.34525L5.7889 5.89817L0.738887 6.6283C0.599659 6.64809 0.472364 6.71339 0.374904 6.81232C0.25708 6.93279 0.192154 7.09487 0.194392 7.26295C0.19663 7.43102 0.265848 7.59133 0.386838 7.70866L4.04059 11.2525L3.17738 16.2565C3.15713 16.3729 3.17008 16.4926 3.21475 16.6021C3.25942 16.7116 3.33403 16.8064 3.43011 16.8758C3.52619 16.9452 3.63991 16.9865 3.75836 16.9949C3.8768 17.0033 3.99525 16.9785 4.10026 16.9233L8.61723 14.5608L13.1342 16.9233C13.2575 16.9886 13.4007 17.0104 13.538 16.9866C13.884 16.9273 14.1168 16.6008 14.0571 16.2565L13.1939 11.2525L16.8476 7.70866C16.9471 7.6117 17.0127 7.48507 17.0326 7.34656C17.0863 7.00029 16.8436 6.67975 16.4956 6.6283Z"
                    fill="black"
                  />
                </Svg>
              </View>
              <View>
                <Text>Rating</Text>
                <Text>4.8 (3.2k)</Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View
                style={{
                  marginRight: 10,
                  width: 35,
                  height: 35,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 35,
                  borderColor: 'black',
                  borderWidth: 1,
                }}>
                <Svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M16.4956 6.6283L11.4456 5.89817L9.18807 1.34525C9.12641 1.2206 9.02497 1.11968 8.89967 1.05835C8.58541 0.904009 8.20352 1.03262 8.0464 1.34525L5.7889 5.89817L0.738887 6.6283C0.599659 6.64809 0.472364 6.71339 0.374904 6.81232C0.25708 6.93279 0.192154 7.09487 0.194392 7.26295C0.19663 7.43102 0.265848 7.59133 0.386838 7.70866L4.04059 11.2525L3.17738 16.2565C3.15713 16.3729 3.17008 16.4926 3.21475 16.6021C3.25942 16.7116 3.33403 16.8064 3.43011 16.8758C3.52619 16.9452 3.63991 16.9865 3.75836 16.9949C3.8768 17.0033 3.99525 16.9785 4.10026 16.9233L8.61723 14.5608L13.1342 16.9233C13.2575 16.9886 13.4007 17.0104 13.538 16.9866C13.884 16.9273 14.1168 16.6008 14.0571 16.2565L13.1939 11.2525L16.8476 7.70866C16.9471 7.6117 17.0127 7.48507 17.0326 7.34656C17.0863 7.00029 16.8436 6.67975 16.4956 6.6283Z"
                    fill="black"
                  />
                </Svg>
              </View>
              <View>
                <Text>Rating</Text>
                <Text>4.8 (3.2k)</Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View
                style={{
                  marginRight: 10,
                  width: 35,
                  height: 35,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 35,
                  borderColor: 'black',
                  borderWidth: 1,
                }}>
                <Svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M16.4956 6.6283L11.4456 5.89817L9.18807 1.34525C9.12641 1.2206 9.02497 1.11968 8.89967 1.05835C8.58541 0.904009 8.20352 1.03262 8.0464 1.34525L5.7889 5.89817L0.738887 6.6283C0.599659 6.64809 0.472364 6.71339 0.374904 6.81232C0.25708 6.93279 0.192154 7.09487 0.194392 7.26295C0.19663 7.43102 0.265848 7.59133 0.386838 7.70866L4.04059 11.2525L3.17738 16.2565C3.15713 16.3729 3.17008 16.4926 3.21475 16.6021C3.25942 16.7116 3.33403 16.8064 3.43011 16.8758C3.52619 16.9452 3.63991 16.9865 3.75836 16.9949C3.8768 17.0033 3.99525 16.9785 4.10026 16.9233L8.61723 14.5608L13.1342 16.9233C13.2575 16.9886 13.4007 17.0104 13.538 16.9866C13.884 16.9273 14.1168 16.6008 14.0571 16.2565L13.1939 11.2525L16.8476 7.70866C16.9471 7.6117 17.0127 7.48507 17.0326 7.34656C17.0863 7.00029 16.8436 6.67975 16.4956 6.6283Z"
                    fill="black"
                  />
                </Svg>
              </View>
              <View>
                <Text>Rating</Text>
                <Text>4.8 (3.2k)</Text>
              </View>
            </View>
          </View>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est vel
            odio elementum non id venenatis, elementum. Enim augue velit
            tristique eu viverra. Massa.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Est vel odio elementum non id venenatis, elementum.
            Enim augue velit tristique eu viverra. Massa.
          </Text>
        </View>
      </ScrollView>
      {/* <View
        style={{
          position: 'absolute',
          bottom: 30,
          width: '100%',
          backgroundColor: 'black',
        }}>
        <Text>Book a tripook A trip</Text>
      </View> */}
    </>
  );
};
export default Detail;
