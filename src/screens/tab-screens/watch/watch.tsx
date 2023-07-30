import React, {FC, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Background, _Screen, _View} from '../../../components';
import {Color} from '../../../const';
import {Card, Header, SearchBar, Genres} from './components';
import {Get} from '../../../services';
import {ApiEndPoints} from '../../../services/api/apiendpoints';

export const Watch: FC = () => {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [list, setList] = useState([]);
  const genres = [
    {
      id: 1,
      name: 'Comedies',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 2,
      name: 'Crime',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 3,
      name: 'Family',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 4,
      name: 'Documentaries',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 5,
      name: 'Dramas',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 6,
      name: 'Fantasy',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 7,
      name: 'Holidays',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 8,
      name: 'Horror',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 9,
      name: 'Sci-Fi',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
    {
      id: 10,
      name: 'Thriller',
      thumbnail: 'https://picsum.photos/200/300/?blur',
    },
  ];
  useEffect(() => {
    let params = {
      api_key: 'dffba9561ac155546bdd3246e565be42',
    };
    Get(ApiEndPoints.getUpcomingMovie, params).then(res => {
      if (res) setList(res?.results);
    });
  }, []);
  const handleSearch = () => {
    console.log('first');
    setIsSearchEnabled(true);
  };
  const handleCloseSearch = () => {
    setIsSearchEnabled(false);
  };
  return (
    <_Screen background={<Background color={Color.White} />} hideTopSafeArea>
      {isSearchEnabled ? (
        <SearchBar
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          handleCloseSearch={handleCloseSearch}
        />
      ) : (
        <Header handleSearch={handleSearch} />
      )}
      <_View height={'85%'} justifyContent={'center'}>
        <FlatList
          contentContainerStyle={styles.flatList}
          numColumns={1}
          data={list}
          renderItem={({item, index}) => (
            <Card title={item.title} poster_path={item?.poster_path} />
          )}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
        />
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  flatList: {
    paddingVertical: 10,
  },
});
