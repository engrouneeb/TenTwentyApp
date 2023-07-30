import React, {FC} from 'react';
import {ImageBackground, Pressable, StyleSheet} from 'react-native';
import {_Button, _Icon, _Text, _View} from '../../../../components';
import {Color} from '../../../../const';
import {Fonts} from '../../../../const/theme';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

export const TopHeader: FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ImageBackground
      imageStyle={styles.imageStyle}
      source={require('../../../../assets/images/placeholder.jpg')}
      style={styles.img}
      resizeMode="cover">
      <_View justifyContent={'center'}>
        <_Text color={Color.White} size={'xMed'} font={Fonts.bold}>
          In theaters december 22, 2021
        </_Text>
        <_Button
          type="primary"
          style={styles.buttons}
          margins={{marginTop: 10}}
          title={'Get Tickets'}
          onPress={() => navigation.navigate('cinema-hall')}
        />
        <_Button
          type="secondary"
          style={styles.buttons}
          margins={{marginTop: 10}}
          title={'Get Tickets'}
          iconFamily="Entypo"
          iconName="controller-play"
          iconColor={Color.White}
          onPress={() => navigation.navigate('home-screen')}
        />
      </_View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 350,
  },
  img: {
    width: '100%',
    height: 330,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttons: {
    width: '70%',
    height: 40,
    marginBottom: 10,
  },
});
