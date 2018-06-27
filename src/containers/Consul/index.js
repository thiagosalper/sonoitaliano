import React from 'react';
import {Text,View,Button,FlatList,ActivityIndicator} from 'react-native';
import {Base,H1} from '../../components';

import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAsoZznz4dHNtXskRQVJah_c16gKsU38a4",
    authDomain: "cidadania-italiana-9d3a1.firebaseapp.com",
    databaseURL: "https://cidadania-italiana-9d3a1.firebaseio.com",
    projectId: "cidadania-italiana-9d3a1",
    storageBucket: "cidadania-italiana-9d3a1.appspot.com",
    messagingSenderId: "55988393804"
  };
firebase.initializeApp(config);


export default class Consul extends React.Component {

    static navigationOptions = {
        title: 'Consulados'
    };

    constructor(props){
        super(props);
        this.state = {
            lista: [],
            loading:true
        };
    }

    componentDidMount = () => {

          const rootref = firebase.database().ref('consulado');
          //const consuladoref = rootref.child('consulado');

          rootref.on('value', (childSnapshot)=>{
            const lista = [];
            childSnapshot.forEach((doc)=>{
                lista.push(doc);
                this.setState({lista: lista, loading: false});
            });
            
          });
    }

    render() {
        if (this.state.loading){ return (<Base><ActivityIndicator size="large" color="#0000ff" /></Base>) }
        return (
            <Base>
                <FlatList
                    data={this.state.lista}
                    renderItem={({item,index})=>{
                        return (
                            <Text 
                            style={{paddingVertical:16, paddingHorizontal:16}}
                            onPress={()=>this.props.navigation.push('ConsulDetails', {id: item.key, nome: item.val().nome})}>{item.val().nome}</Text>
                            );
                    }} 
                />

                <Button 
                    title="Consulados"
                    onPress={()=>this.props.navigation.goBack()}
                />
            </Base>
        );
    }
}