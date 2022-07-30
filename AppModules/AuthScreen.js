import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

class AuthScreen extends Component {
  constructor() {
    super();
    this.state = {
      codeText: '',
    };
  }
  handleLoginClick() {
    console.log('click==>', this.state.codeText, this.state.codeText.length);
    if (this.state.codeText.length > 0) {
      this.props.navigation.navigate('HomeScreen');
    }
  }

  render() {
    const {codeText} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInput
          style={{borderWidth: 2, padding: 10, margin: 10}}
          placeholder={'Please enter valid code'}
          value={codeText}
          onChangeText={text => {
            console.log('text==>', text);
            this.setState({codeText: text});
          }}
        />
        <TouchableOpacity
          onPress={() => this.handleLoginClick()}
          style={{
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'green',
            paddingVertical: 10,
            margin: 10,
          }}>
          <Text style={{textAlign: 'center'}}>{'Login'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AuthScreen;
