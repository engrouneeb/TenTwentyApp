import React, {FC} from 'react';
import {Background, _Screen, _Text, _View} from '../../../components';
import {Color} from '../../../const';
import {Tags, TopHeader} from './components';

export const MoveDetails: FC = () => {
  const data: [any] = ['Action', 'Trailer', 'Science', 'Friection'];
  const text =
    "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them. Discover the origins of the very first independent intelligence agency in The King's Man. The Comic Book “The Secret Service” by Mark Millar and Dave Gibbons.";
  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      <TopHeader />
      <_View paddings={{padding: 40}}>
        <_Text
          margins={{marginTop: 20, marginBottom: 20}}
          color={Color.TextDark}
          size={'sml'}
          font={'Poppins-Bold'}
          style={{fontWeight: '500'}}>
          Geners
        </_Text>
        <Tags data={data} />
        <_View height={1} backgroundColor={Color.Gray} />
        <_Text
          margins={{marginTop: 10}}
          color={Color.TextDark}
          size={'med'}
          font={'Poppins-Bold'}
          style={{fontWeight: '400'}}>
          Overview
        </_Text>
        <_Text color={Color.TextDark} size={'xsml'} font={'Poppins-Regular'}>
          {text}
        </_Text>
      </_View>
    </_Screen>
  );
};
