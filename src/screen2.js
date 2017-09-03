import React from 'react';
import {View, Text, Button} from 'react-native';

class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Screen 2',
  };
  render() {
      const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Screen 2</Text>
        <Button
          onPress={() => navigate('Pop back')}
          title="Pop back"
        />
      </View>
    );
  }
}

export default Screen2;