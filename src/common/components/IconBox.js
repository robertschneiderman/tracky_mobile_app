import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

const IconBox = ({icon, text}) => (
    <View style={iconBoxStyle}>
        <Image source={require('../images/my-icon.png')} />
        <Text>{text}</Text>
    </View>
);

const iconBoxStyle = {
    borderBottom: '1px solid #eee'
};

export default IconBox;