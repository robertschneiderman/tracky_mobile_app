import React, {Component} from 'react';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TextInput, Button } from 'react-native';
import { PrimaryBtn, SecondaryBtn } from '../../../common/components/';

class Auth extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.signinUserByToken();
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.authenticated && nextProps.authenticated) {
            this.props.navigation.navigate('Tabs');
        // this.props.requestUser(getStorage('currentUser'));      
        }
    }  
    
    render() {
        let { navigation } = this.props;
        return(
            <View>
                <PrimaryBtn text="Get Started"/>
                <SecondaryBtn text="Already a member? SignIn" onPress={() => navigation.navigate('Signin')}  />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,    
});

const mapDispatchToProps = dispatch => ({
    signinUserByToken: payload => dispatch(actions.signinUserByToken(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);