import React, {Component} from 'react';

import { TextInput } from 'react-native';


const Input = () => (
    <TextInput style={inputStyle} />
);

const inputStyle = {
    height: 40,
    borderColor: '#bbb',
    borderWidth: 1,
    padding: 10,
    width: '90%',
    margin: 5
};

export default Input;