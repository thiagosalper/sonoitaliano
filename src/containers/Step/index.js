import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
//import StepIndicator from 'react-native-step-indicator';
import {IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class Step extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentPage:0
        }
    }
    
    componentDidMount = () => {

    }

    componentWillReceiveProps = (nextProps,nextState) =>{
        if(nextState.currentPage != this.state.currentPage) {
          if(this.viewPager) {
            this.viewPager.setPage(nextState.currentPage)
          }
        }
    }

    render = () => {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{height:'100%'}}
                    indicator={this._renderDotIndicator()}>
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
                 {this._renderBackBtn()}
            </View>
        );
    }

    _renderBackBtn () {
        return (
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 8,
                    right: 16
                }}
                activeOpacity={0.6}
                onPress={()=>this.props.navigation.push('Home')} >
                <Image
                    source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAJUlEQVR42mNgAILy8vL/DLgASBKnApgkVgXIkhgKiNKJ005s4gDLbCZBiSxfygAAAABJRU5ErkJggg=='}}
                    style={{
                        width: 32,
                        height: 32,
                        tintColor: 0XFFFFFFDD
                    }}
                />
            </TouchableOpacity>
        )
    }


    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
}