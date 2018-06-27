import React from 'react';
import {Text,View,Button,FlatList} from 'react-native';
import {Base,H1} from '../../components';

import firebase from 'firebase';

export default class Links extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lista: [],
            loading:true
        };
    }

    componentDidMount = () => {
          const consuladoref = firebase.database().ref(`consulado/${this.props.navigation.state.params.id}/recurso`);

          consuladoref.on('value', (childSnapshot)=>{
            const lista = [];
            childSnapshot.forEach((doc)=>{
                lista.push(doc);
                this.setState({lista: lista, loading: false});
            });
            
          });
    }

    render() {
        return (
            <Base>

                <FlatList
                    data={this.state.lista}
                    renderItem={({item,index})=>{
                        return (
                            <Text 
                            style={{paddingVertical:16, paddingHorizontal:16}}
                            onPress={()=>null}>{item.val().nome}</Text>
                            );
                    }} 
                />

           
            </Base>
        );
    }
}