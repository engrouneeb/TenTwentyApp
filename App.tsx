import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {RootNavigator} from './src/navigation/RootNavigator';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;
