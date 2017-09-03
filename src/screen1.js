import React from 'react';
import {View, Text} from 'react-native';

class Screen1 extends React.Component {
  static navigationOptions = {
    title: 'Screen 1',
  };
  render() {
    return (
      <View>
        <Text>Screen 1</Text>
      </View>
    );
  }
}

export default Screen1;