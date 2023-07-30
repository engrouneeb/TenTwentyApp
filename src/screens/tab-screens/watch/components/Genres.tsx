import {FC} from 'react';
import {StyleSheet, ImageBackground, Pressable} from 'react-native';
import {Color, Fonts} from '../../../../const/theme';
import {_Text, _View} from '../../../../components';
import FastImage from 'react-native-fast-image';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

interface GenresInterface {
  id: number;
  title: string;
  backgroundPic: string;
}

export const Genres: FC<GenresInterface> = ({title, backgroundPic, id}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const goToDetails = () => {
    navigation.navigate('movie-details', {movie_id: id});
  };
  return (
    <Pressable onPress={goToDetails}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={{uri: backgroundPic}}
        style={styles.img}
        resizeMode="cover">
        <_View style={styles.overlay}>
          <_Text
            numberOfLines={1}
            color={Color.White}
            size={'sml'}
            font={Fonts.regular}>
            {title}
          </_Text>
        </_View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
  },
  img: {
    alignSelf: 'center',
    width: 180,
    height: 105,
    marginHorizontal: 5,
    marginBottom: 20,
  },

  overlay: {
    borderRadius: 20,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingLeft: 10,
  },
});
