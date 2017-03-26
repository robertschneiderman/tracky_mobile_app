import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { signoutUser } from '../../auth/redux/actions'
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TextInput, Button } from 'react-native';
import {Card} from '../../../common/components/'

export class More extends Component {

  handleSignout() {
    this.props.signoutUser();
    // debugger;
    this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <Card>
        <TouchableOpacity><Text>Add Task</Text></TouchableOpacity>
        <TouchableOpacity><Text>Settings</Text></TouchableOpacity>
        <TouchableOpacity><Text>Help</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.handleSignout.bind(this)}><Text>Sign Out</Text></TouchableOpacity>
      </Card>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    signoutUser: () => dispatch(signoutUser()),
    dispatches: bindActionCreators({ ...actions }, dispatch)
  };
}

More.propTypes = {
  dispatches: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(More);
