import React, {Component} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';

class AuthScreen extends Component {
  constructor() {
    super();
    this.state = {
      codeText: '',
    };
  }
  handleLoginClick() {
    if (this.state.codeText.length > 0) {
      this.props.navigation.navigate('HomeScreen');
      this.setState({codeText:''})
    }else {
        alert('Please enter valid code')
    }
  }

  render() {
    const {codeText} = this.state;
    return (
        <ScrollView contentContainerStyle={{flex:1}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInput
          style={{borderWidth: 2, padding: 10, margin: 10}}
          placeholder={'Please enter valid code'}
          value={codeText}
          onChangeText={text => {
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
        </ScrollView>
    );
  }
}

export default AuthScreen;
