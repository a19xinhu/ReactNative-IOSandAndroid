/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(){
  //  {}
  return (
    <View style={styles.container}>
      <Text>It will have a button</Text>
      <Button color='coral' /*onPress={() => } */ title='add image'/>
      <Image source={require('./assets/rating-1.png') }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  button: {
    
  },
  item: {
    
  },
  
});

export default App;
