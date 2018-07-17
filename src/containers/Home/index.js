import React from 'react';
import {
    Text,
    View,
    Button,
    Image,
    TextInput,
    TouchableHighlight,
    Switch,
    ScrollView,
    AsyncStorage,
    BackHandler,
    Alert} from 'react-native';
import {
    Base,
    H1} from '../../components';

const style = {
    header: {
        backgroundColor: '#BC2D2D',
        padding: 16,
        marginLeft: -16,
        marginRight: -16,
        
        user: {
            flexDirection: 'row',
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: 16,
            backgroundColor: '#A22222'
        },
        frases: {
            paddingVertical:24,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center', 
            fontSize:14
        }
    },
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

        this.clearDados = this.clearDados.bind(this);       
        
        
    }

    getDados = async () => {
        try {
            const value = await AsyncStorage.getItem('USUARIO');
            if (value !== null) {
                const dados = JSON.parse(value);
                this.setState(dados);
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    clearDados = () => {
        AsyncStorage.removeItem('USUARIO');
        
        Alert.alert(
            'Sair',
            'Deseja sair do app?',
            [
                {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Sim', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false }
        );

    }

    componentDidMount = () => {
        this.getDados();
    }

    render() {
        
        return (
            <View style={{flex:1}}>
                <View style={style.header}>
                    <View style={style.header.user}>
                        <Image
                            source={require('../../img/ic_user.png')}
                            style={{
                                width: 48,
                                height: 48
                            }}
                        />
                        <Text style={{color: '#FFFFFF',fontSize:18}}>CIAO, {this.state.nome}</Text>
                        <TouchableHighlight onPress={()=>this.clearDados()}>
                            <Image
                                source={require('../../img/ic_exit.png')}
                                style={{
                                    width: 30,
                                    height: 32
                                }}
                            />
                        </TouchableHighlight>
                    </View>
                    
                    <View style={style.header.frases}>
                        <Text style={{color: '#FFFFFF',fontSize:14}}>“ Frases motivacionais aqui todo dia aleatórias. “</Text>
                        <Text style={{color: '#FFFFFF',fontSize:11}}>fonte nome aqui</Text>
                    </View>
                </View>

    
                <ScrollView style={{padding:16}}>

                    <TouchableHighlight style={style.baseButton} onPress={()=>this.props.navigation.push("Consul")}>
                        <View>
                        <Text>Consulados</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={style.baseButton} onPress={()=>this.props.navigation.push("Config")}>
                        <View>
                        <Text>Configurações</Text>
                        </View>
                    </TouchableHighlight>

                </ScrollView>
                
            </View>
        );
    }
}