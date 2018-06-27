import React from 'react';
import {View} from 'react-native';

const style = {
    base: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: 'powderblue'
    }
}
export default class Base extends React.Component {
    render=()=>{
        return (
            <View style={style.base}>
                {this.props.children}
            </View>
        );
    }
}