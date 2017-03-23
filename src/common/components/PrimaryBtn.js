import React, {Component} from 'react';
import { Button, TouchableOpacity } from 'react-native';
import Centered from './Centered';

const PrimaryBtn = ({text, onPress}) => (
    <Centered>
        <TouchableOpacity 
            onPress={onPress} 
            style={buttonStyle} >
            <Button color='#fff' title={text}/>
        </TouchableOpacity>
    </Centered>
);

const buttonStyle = {
  backgroundColor: '#35c1f7',
  display: 'flex',
  marginTop: 20,
  alignItems: 'center',
  width: '90%'
};

export default PrimaryBtn;