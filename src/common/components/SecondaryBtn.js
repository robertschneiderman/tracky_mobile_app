import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Centered from './Centered';

const SecondaryBtn = ({text, onPress}) => (
    <Centered>
        <TouchableOpacity 
            onPress={onPress} 
            style={buttonStyle} >
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    </Centered>
);

const buttonStyle = {
  borderColor: '#35c1f7',
  borderWidth: 2,
  height: 45,
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%'
};

const textStyle = {
    color: '#35c1f7',
    fontSize: 17,      
};

export default SecondaryBtn;