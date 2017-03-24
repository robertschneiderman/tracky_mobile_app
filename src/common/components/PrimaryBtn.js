import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Centered from './Centered';

const PrimaryBtn = ({text, onPress}) => (
    <Centered>
        <TouchableOpacity 
            onPress={onPress} 
            style={buttonStyle} >
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    </Centered>
);

const buttonStyle = {
  backgroundColor: '#35c1f7',
  height: 45,
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%'
};

const textStyle = {
    color:'#fff',
    fontSize: 17,      
};

export default PrimaryBtn;