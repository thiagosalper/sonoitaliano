import React from 'react';
import {
    Text,
    View,
    Button,
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
            <Base>
                <H1>Olá, {this.state.nome}</H1>

                <Text onPress={()=>this.clearDados()}>Sair</Text>
                
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