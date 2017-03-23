import React, {Component} from 'react';
import { Button } from 'react-native';


const PrimaryButton = (text) => (
    <Button style={buttonStyle} />
);

const buttonStyle = {
    display: 'flex',
    alignItems: 'space-between'
};

export default PrimaryButton;