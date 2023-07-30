import {FC, Fragment} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Color, Fonts} from '../../../../const/theme';
import {_Text, _Image} from '../../../../components';

interface GenresInterface {
  title: string;
  poster_path: string;
}

export const Genres: FC<GenresInterface> = ({title, poster_path}) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/original' + poster_path;
  return (
    <Fragment>
      <_Image
        imageStyle={styles.imageStyle}
        uri={imgBaseUrl}
        style={styles.img}
        height={180}
        width={'98%'}
        resizeMode="cover"
      />
      <_Text color={Color.White} size={'med'} font={Fonts.regular}>
        {title}
      </_Text>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    height: 180,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingLeft: 10,
    marginBottom: 5,
  },
});
