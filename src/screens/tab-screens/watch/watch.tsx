import React, {FC, useEffect, useState, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Background, _Screen} from '../../../components';
import {Color} from '../../../const';
import {ApiEndPoints, Get} from '../../../services';
import {Card, FlatlistHeader, Header, SearchBar} from './components';
import {useDispatch, useSelector} from 'react-redux';
import {upComingMoviesList, revertStore} from '../../../redux/reducers';
const imgBaseUrl = 'https://image.tmdb.org/t/p/original';

interface responeInterface {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Dates {
  maximum: string;
  minimum: string;
}

export const Watch: FC = () => {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [numColumns, setNumColumns] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch<any>();
  const {results} = useSelector((state: any) => state.appSlice);
  const [list, setList] = useState<Result[]>([]);
  const [searchData, setSearchData] = useState<Result[]>([]);

  const fetchData = () => {
    Get(ApiEndPoints.getUpcomingMovie).then((res: responeInterface) => {
      if (res) {
        const {results} = res;
        dispatch(upComingMoviesList({results}));
        setSearchData(results);
        setList(results);
      } else {
        setSearchData(results);
        setList(results);
      }
    });
  };

  useEffect(() => {
    fetchData();
    // dispatch(revertStore());
  }, []);

  const handleSearch = () => {
    setNumColumns(2);
    setIsSearchEnabled(true);
  };

  const handleCloseSearch = () => {
    setSearchQuery('');
    setNumColumns(1);
    setIsSearchEnabled(false);
  };

  const handleSearchQuery = (value: string) => {
    if (value.length === 0) {
      setList(searchData);
    }
    setSearchQuery(value);
    if (value.length > 0) {
      let filteredData = searchData.filter(movie =>
        movie.title.toLowerCase().includes(value.toLowerCase()),
      );
      setList(filteredData);
      setNumColumns(1);
    } else {
      setNumColumns(2);
    }
  };

  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      {isSearchEnabled ? (
        <SearchBar
          setSearchQuery={handleSearchQuery}
          searchQuery={searchQuery}
          handleCloseSearch={handleCloseSearch}
        />
      ) : (
        <Header handleSearch={handleSearch} />
      )}

      <FlatList
        key={numColumns}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        data={list}
        renderItem={({item, index}) => (
          <Card
            id={item.id}
            title={item.title}
            backgroundPic={imgBaseUrl + item.poster_path}
            isSearchEnabled={isSearchEnabled}
            searchQuery={searchQuery}
          />
        )}
        ListHeaderComponent={
          <FlatlistHeader
            isSearchEnabled={isSearchEnabled}
            searchQuery={searchQuery}
            numberOfResult={list.length}
          />
        }
        ListFooterComponent={() => <View style={{height: 80}} />}
      />
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
    backgroundColor: Color.Gray + 30,
    flex: 1,
  },
});
