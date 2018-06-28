import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

// pages 
import Step from './containers/Step';
import Home from './containers/Home';
import Config from './containers/Config';
import Consul from './containers/Consul';
import ConsulDetails from './containers/Consul/consuldetails';
import Links from './containers/Consul/links';
import ListaEspera from './containers/Consul/listaespera';

const Route = createStackNavigator({
    Step: {screen: Step, 
        navigationOptions: {
            title: 'Welcome', 
            header: null 
        }
    },
    Config: {screen: Config,
        navigationOptions:  {
            title: '',
            header: null
        }
    },
    Home: {screen: Home,
        navigationOptions:  {
            title: 'Sono Italiano!',
            header: null
        }
    },
    Consul: {screen: Consul}, 
    ConsulDetails: {screen: ConsulDetails},
    Links: {screen: Links,
        navigationOptions:  {
            title: 'Links úteis'
        }
    },
    ListaEspera: {screen: ListaEspera,
        navigationOptions:  {
            title: 'Listas de espera'
        }
    },
},{
    navigationOptions: {
        headerStyle: {
          backgroundColor: 'skyblue',
        },
        headerTintColor: 'steelblue',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }
});

export default class App extends React.Component {
    render = () => {
        return <Route />;
    }
}
