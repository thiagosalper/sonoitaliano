import React from 'react';
import {Text,View,Button,TextInput,TouchableHighlight,Switch,ScrollView,AsyncStorage,Alert} from 'react-native';
import {Base,H1} from '../../components';

const style = {
    form: {
        flex: 10,
        paddingHorizontal:16,
        paddingVertical:16
    },
    continuar: {
        flex: 1,
        backgroundColor: 'red', 

    }
}

export default class Config extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            nome: '',
            estaNaItalia: false,
            possuiCidadania: false
        };

        this.getDados = this.getDados.bind(this);
        this.setDados = this.setDados.bind(this);
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

    setDados = async () => {
        const dados = JSON.stringify(this.state);
        try {
            await AsyncStorage.setItem('USUARIO', dados, () => {
                // aqui salvar no firebase
                this.props.navigation.push('Home');
            });
        }catch(error){
            Alert.alert("Ops. Ocorreu um erro, tente novamente.");
        }

    }

    componentDidMount = () => {
        this.getDados();
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={style.form}>
                    <Text>Informe seu nome</Text>
                    <TextInput
                        style={{color:'#fff'}}
                        onChangeText={(text) => this.setState({nome:text})}
                        value={this.state.nome}
                        placeholder={'Como devemos lhe chamar?'}
                    />

                    <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
                        <Text>Já possui cidadania italiana?</Text>
                        <Switch
                        onValueChange={(value) => this.setState({...this.state,possuiCidadania:value})}
                        value={this.state.possuiCidadania} />
                    </View>

                    <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
                        <Text>Está na Itália</Text>
                        <Switch
                        onValueChange={(value) => this.setState({...this.state,estaNaItalia:value})}
                        value={this.state.estaNaItalia} />
                    </View>

                </View>
                <Text style={style.continuar} onPress={()=>this.setDados()}>Continuar</Text>
            </View>
        );
    }
}