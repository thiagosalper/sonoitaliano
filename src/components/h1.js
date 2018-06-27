import React from 'react';
import {Text} from 'react-native';

const style = {
    h1: {
        fontSize: 24,
        color: 'steelblue'
    }
}
export default class H1 extends React.Component {
    render=()=>{
        return (
            <Text style={style.h1}>
                {this.props.children}
            </Text>
        );
    }
}