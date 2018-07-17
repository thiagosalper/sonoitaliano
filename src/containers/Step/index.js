import React from 'react';
import {View,Text,TouchableOpacity,Image,AsyncStorage} from 'react-native';
//import StepIndicator from 'react-native-step-indicator';
import {IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class Step extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentPage:0
        }
        this.getDados();
    }

    getDados = async () => {
        try {
            const value = await AsyncStorage.getItem('USUARIO');
            if (value !== null) {
                this.props.navigation.push('Home');
            }
        } catch (error) {
            // Error retrieving data
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
                    <View style={{backgroundColor:'#599000',flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                        <Image
                        style={{marginBottom:30,height:190,width:152}}
                        source={require('../../img/img_ajuda.png')}
                        />
                        <Text style={{color: '#FFFFFF', fontSize: 24}}>ENCONTRE AJUDA</Text>
                    </View>
                    <View style={{backgroundColor:'#FFFFFF',flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                        <Image
                        style={{marginBottom:30,height:190,width:190}}
                            source={require('../../img/img_recurso.png')}
                        />
                        <Text style={{color: '#CCCCCC', fontSize: 24}}>ORGANIZE SEUS RECURSOS</Text>
                    </View>
                    <View style={{backgroundColor:'#BC2D2D',flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                        <Image
                        style={{marginBottom:30,height:190,width:190}}
                            source={require('../../img/img_saga.png')} />
                        <Text style={{color: '#FFFFFF', fontSize: 24}}>ACOMPANHE SUA SAGA</Text>
                        {this._renderBackBtn()}
                    </View>
                </IndicatorViewPager>
                 
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
                onPress={()=>this.props.navigation.push('Config')} >
                <Image
                    source={require('../../img/arrow_right.png')}
                    style={{
                        width: 17,
                        height: 32
                    }}
                />
            </TouchableOpacity>
        )
    }


    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
}