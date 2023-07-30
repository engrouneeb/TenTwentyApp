import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, {FC} from 'react';
import {ImageBackground, Pressable, StyleSheet} from 'react-native';
import {_Button, _Icon, _Text, _View} from '../../../../components';
import {Color} from '../../../../const';
const imgBaseUrl = 'https://image.tmdb.org/t/p/original';
interface Props {
  goBack: () => void;
}
const Header: FC<Props> = ({goBack}) => {
  return (
    <Pressable onPress={goBack} style={styles.backIcon}>
      <_Icon
        family="Fontisto"
        name="angle-left"
        size={20}
        color={Color.White}
      />
      <_Text
        margins={{marginLeft: 20}}
        color={Color.White}
        size={'sml'}
        font={'Poppins-Bold'}>
        Watch
      </_Text>
    </Pressable>
  );
};

interface HeaderProps {
  tagLine: string;
  movieImage: string;
}

export const TopHeader: FC<HeaderProps> = ({tagLine, movieImage}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const URL = imgBaseUrl + movieImage;
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ImageBackground
      imageStyle={styles.imageStyle}
      source={{uri: URL}}
      style={styles.img}
      resizeMode="cover">
      <_View alignContent={'center'} marginTop={20}>
        <Header goBack={goBack} />
        <_View
          style={{
            justifyContent: 'center',
            marginTop: 160,
          }}>
          <_Text
            align="center"
            color={Color.White}
            size={'med'}
            font={'Poppins-Medium'}>
            {tagLine}
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
      </_View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 50,
    marginLeft: 20,
  },
  imageStyle: {
    width: '100%',
    height: 400,
  },
  img: {
    width: '100%',
    height: 380,
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
