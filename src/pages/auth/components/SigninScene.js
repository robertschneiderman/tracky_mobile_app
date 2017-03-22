import React, { Component } from 'react';
import * as actions from '../redux/actions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TextInput, Button } from 'react-native';
import { validateSignin, renderField } from './helpers';


class Signin extends Component {
  // onChangetext={this.onEmailChange.bind(this)}

  submit(values) {
    console.log('submitting form', values);
  }  

  render() {
    const { handleSubmit } = this.props;
    //  secureTextEntry    
    return (
      <View>
        <View>
          <Field 
            name="email"
            component={renderField}/>
        </View>      

        <View>
          <Field 
            name="password"
            component={renderField} />          
        </View>       

        <TouchableOpacity onPress={handleSubmit(this.submit)}>
          <Text>Submit</Text>
        </TouchableOpacity>              
      </View>
    );
  }

}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function mapDispatchToProps(dispatch) {
  return {
    signinUser: payload => dispatch(actions.signinUser(payload))
  };
}

let signInForm = reduxForm({
  form: 'signin',
  validate: validateSignin  
})(Signin);

export default signInForm = connect(mapStateToProps, mapDispatchToProps)(signInForm);