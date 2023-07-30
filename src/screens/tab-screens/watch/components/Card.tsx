import React, {FC} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {_Text} from '../../../../components';
import {Color} from '../../../../const';
import {Fonts} from '../../../../const/theme';
interface CardInterface {
  title: string;
  poster_path: string;
}

const Card: FC<CardInterface> = ({title, poster_path}) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/original' + poster_path;
  console.log({imgBaseUrl});

  return (
    <ImageBackground
      imageStyle={styles.imageStyle}
      source={{uri: imgBaseUrl}}
      style={styles.img}
      resizeMode="cover">
      <_Text color={Color.White} size={'xMed'} font={Fonts.bold}>
        {title}
      </_Text>
    </ImageBackground>
  );
};

export {Card};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 10,
    width: '96%',
    justifyContent: 'flex-end',
  },
  img: {
    width: '100%',
    height: 180,
    marginHorizontal: 5,
  },
});
