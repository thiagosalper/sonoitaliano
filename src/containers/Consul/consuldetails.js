import React from 'react';
import {Text,View,Button,TouchableHighlight} from 'react-native';
import {Base,H1} from '../../components';

const style = {
    baseButton: {
        paddingVertical: 40,
        marginBottom: 16,
        backgroundColor: 'skyblue',
        color: 'steelblue',
        alignItems: 'center'
    }
}

export default class ConsulDetails extends React.Component {
    static navigationOptions = {
        title: 'Consulados Detalhes'
    };

    constructor(props){
        super(props);
        // state
        this.state = {
            id: null,
            nome: null,
        };
    }

    componentDidMount = () => {
       this.setState({
           id: this.props.navigation.state.params.id,
           nome: this.props.navigation.state.params.nome
       });
    }

    render() {
        return (
            <Base>
                <H1>{this.state.nome}</H1>
                <Text>{this.state.id}</Text>

                <View>
                    <Text>Contatos</Text>
                    <Text>Horários</Text>
                    <Text>Endereco</Text>
                </View>

                <View>
                    <TouchableHighlight style={style.baseButton} onPress={()=>this.props.navigation.push('Links',{id:this.state.id})}>
                        <Text>LINKS UTEIS</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={style.baseButton} onPress={()=>this.props.navigation.push('ListaEspera',{id:this.state.id})}>
                        <Text>LISTA DE ESPERA</Text>
                    </TouchableHighlight>
                </View>

            </Base>
        );
    }
}