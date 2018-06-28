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

import OneSignal from 'react-native-onesignal';

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
    componentWillMount = () => {
        OneSignal.init("553bdcdc-1dd5-4de0-8873-e3a3df73f23e");

        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentWillUnmount = () => {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived = (notification) => {
        console.log("Notification received: ", notification);
    }

    onOpened = (openResult) => {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }

    onIds = (device) => {
        console.log('Device info: ', device);
    }

    render = () => {
        return <Route />;
    }
}
