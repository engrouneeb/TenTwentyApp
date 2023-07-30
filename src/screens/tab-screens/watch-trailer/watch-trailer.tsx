import React, {FC, useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import Video from 'react-native-video';
import {Background, _Screen} from '../../../components';
import {Color} from '../../../const';
import {ApiEndPoints, Get} from '../../../services';
import {VideoPlayer} from './VideoPlayer';
interface Props {
  navigation: any;
  route: any;
}
export const WatchTrailer: FC<Props> = ({navigation, route}) => {
  const {movie_id} = route?.params;
  const videoPlayerRef: any = useRef(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paused, setPaused] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [list, setList] = useState<any>([]);

  const fetchData = () => {
    let URL = ApiEndPoints.getVideo + movie_id + '/videos';
    Get(URL).then((res: any) => {
      if (res) {
        const {results} = res;
        getYouTubeList(results);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getYouTubeList = async (res: any) => {
    const list = await res.map((item: any) => {
      return item.key;
    });
    setList(list);
  };
  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      {list && <VideoPlayer list={list} />}
    </_Screen>
  );
};

const styles = StyleSheet.create({
  mediaPlayer: {
    backgroundColor: Color.black,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
});
