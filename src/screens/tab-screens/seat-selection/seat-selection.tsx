import React, {FC} from 'react';
import {Background, _Screen, _Text, _View} from '../../../components';
import {Color} from '../../../const';

export const SeatSelection: FC = () => {
  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      <_View flex={1} paddings={{padding: 20}}>
        <_Text color={Color.Primary} size={'lrg'} font={'Poppins-SemiBold'}>
          Seat Selection Screen
        </_Text>
      </_View>
    </_Screen>
  );
};