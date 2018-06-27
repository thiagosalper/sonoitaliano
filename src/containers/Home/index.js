import React from 'react';
import {Text,View,Button,TextInput,TouchableHighlight,Switch,ScrollView} from 'react-native';
import {Base,H1} from '../../components';

const style = {
    secoes: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    baseButton: {
        paddingVertical: 40,
        marginBottom: 16,
        backgroundColor: 'skyblue',
        color: 'steelblue',
        alignItems: 'center'
    }
}
export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            nome: '',
            estaNaItalia: false,
            possuiCidadania: false
        };
    }
    render() {
        return (
            <Base>
                <TextInput
                    style={{color:'#fff'}}
                    onChangeText={(text) => this.setState({nome:text})}
                    value={this.state.nome}
                    placeholder={'Qual seu nome?'}
                />
                
                <H1>Olá, {this.state.nome}</H1>

                <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
                    <Text>Já está na Itália</Text>
                    <Switch
                    onValueChange={(value) => this.setState({...this.state,estaNaItalia:value})}
                    value={this.state.estaNaItalia} />
                </View>

                <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
                    <Text>Já possui cidadania?</Text>
                    <Switch
                    onValueChange={(value) => this.setState({...this.state,possuiCidadania:value})}
                    value={this.state.possuiCidadania} />
                </View>
                
                <H1>Recursos</H1>
                <ScrollView>
                    <TouchableHighlight style={style.baseButton} onPress={()=>this.props.navigation.push('Consul')}>
                        <View>
                        <Text>recursos de</Text>
                        <Text>Consulados</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={style.baseButton} onPress={()=>this.props.navigation.push('Home')}>
                    <View>
                        <Text>ajuda na</Text>
                        <Text>Itália</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={style.baseButton} onPress={()=>this.props.navigation.push('Consul')}>
                    <View>
                        <Text>estou na Itália</Text>
                        <Text>Ofereço ajuda</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={style.baseButton} onPress={()=>this.props.navigation.push('Home')}>
                    <View>
                        <Text>sobre o</Text>
                        <Text>App</Text>
                        </View>
                    </TouchableHighlight>
                    
                </ScrollView>
                
            </Base>
        );
    }
}