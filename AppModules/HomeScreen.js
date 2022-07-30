import React, {Component} from 'react';
import {Text, View} from 'react-native';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      apiData: '',
    };
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   firstParam: 'yourValue'
      // })
    })
      .then(response => console.log('data==>', response))
      .catch(e => e);
  }

  render() {
    return (
      <View>
        <Text>{'hiii'}</Text>
      </View>
    );
  }
}
export default HomeScreen;
