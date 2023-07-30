import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {_Text, _View} from '../../../../components';
import {Color} from '../../../../const';
import {Fonts} from '../../../../const/theme';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  data: [];
}
export const Tags: FC<Props> = ({data}) => {
  return (
    <_View style={{flexDirection: 'row', with: '100%'}}>
      {data.map((gener: any) => {
        return (
          <_View style={styles.background}>
            <_Text color={Color.White} size={'tny'} font={Fonts.bold}>
              Watch
            </_Text>
          </_View>
        );
      })}
    </_View>
  );
};
const styles = StyleSheet.create({
  background: {
    width: 60,
    height: 24,
    borderRadius: 16,
    backgroundColor: Color.Secondary,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    marginVertical: 10,
  },
});
