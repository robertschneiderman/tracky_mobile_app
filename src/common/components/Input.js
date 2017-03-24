import React, {Component} from 'react';

import { View, TextInput } from 'react-native';


const Input = ({ input: {onChange}, label, placeholder, type, meta: { touched, error, warning } }) => (
    <View style={viewStyle}>
        <TextInput style={inputStyle} placeholder={placeholder} onChangeText={onChange} />
    </View>
);

const viewStyle = {
    borderBottomColor: '#ddd',
    borderBottomWidth: .5,
};

const inputStyle = {
    height: 40,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    padding: 10,
    width: '90%',
    margin: 5
};

export default Input;