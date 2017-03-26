import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TextInput, Button } from 'react-native';
import { PrimaryBtn, SecondaryBtn } from '../../../common/components/';

const Auth = ({navigation}) => {
    debugger;
    return (
    <View>
        <PrimaryBtn text="Get Started" onPress={navigation.navigate('Signin')} />
        <SecondaryBtn text="Already a member? SignIn" />
    </View>
    );
};

export default Auth;