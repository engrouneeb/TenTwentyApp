import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {_Text} from '../../../../components';
import {Color} from '../../../../const';
import {Fonts} from '../../../../const/theme';
import {Genres, MovieList, UpcomingMovies} from '.';
interface CardInterface {
  id: number;
  title: string;
  backgroundPic: string;
  isSearchEnabled: boolean;
  searchQuery: string;
}

const Card: FC<CardInterface> = ({
  id,
  title,
  backgroundPic,
  isSearchEnabled,
  searchQuery,
}) => {
  return isSearchEnabled == false ? (
    <UpcomingMovies title={title} backgroundPic={backgroundPic} id={id} />
  ) : isSearchEnabled && searchQuery.length > 0 ? (
    <MovieList title={title} backgroundPic={backgroundPic} id={id} />
  ) : (
    <Genres title={title} backgroundPic={backgroundPic} id={id} />
  );
};

export {Card};

const styles = StyleSheet.create({});
