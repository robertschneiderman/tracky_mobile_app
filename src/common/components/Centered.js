import React, {Component} from 'react';
import { View } from 'react-native';

const Centered = ({children}) => (
    <View style={viewStyle}>
        {children}
    </View>
);

const viewStyle = {
    alignItems: 'center',
};

export default Centered;