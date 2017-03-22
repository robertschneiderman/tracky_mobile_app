import React, { Component } from 'react';
// import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import {  StyleSheet, Text, View, Image, TouchableHighlight, TextInput, Button } from 'react-native';

class Signin extends Component {
  // onChangetext={this.onEmailChange.bind(this)}

  render() {
    // const { handleSubmit } = this.props;
    return (
      <View>
        <View>
          <Input 
             label="Email"
             placeholder="email@gmail.com" />
        </View>      

        <View>
          <Input 
             secureTextEntry
             label="Password"
             placeholder="password" />
        </View>       

        <View>
          <Button>Login</Button>
        </View>             
      </View>
    );
  }

}


export default Signin;
