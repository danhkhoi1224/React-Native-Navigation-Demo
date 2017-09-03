import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Screen1 from './screen1';
import Screen2 from './screen2';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
     return (
      <View>
        <Text>Hello, Main Screen!</Text>
        <Button
          onPress={() => navigate('Screen1')}
          title="navigate to Screen1"
        />
         <Button
          onPress={() => navigate('Screen2')}
          title="navigate to Screen2"
        />
      </View>
    );
  }
}

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Screen1: {screen: Screen1},
  Screen2: {screen: Screen2},
});

export default Navigator;