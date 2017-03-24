import React, {Component} from 'react';
import { View } from 'react-native';

const Card = ({children}) => (
    <View style={cardStyle}>
        {children}
    </View>
);

const cardStyle = {
    height: 40
};

export default Card;