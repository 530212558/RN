
import React from 'react';
import { Text, View,Button,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AppContainer from './RouteConfig.js'

import { connect } from 'react-redux'
import { setLogin } from '@/redux/actions'


class homeScreen extends React.Component {
    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({ focused }) => {
            return <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={{ height: 22, width: 22 }} />
        },
    };
    render() {
        console.log(this.props,"123")
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text >Home!{this.props.first}{this.props.last} 123 </Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.setLogin({
                            code: null,
                            first: "lu",
                            last: "yu",
                            uid: "",
                            tourist: null
                        });
                    }}
                />

            </View>
        );
    }
}

// let HomeScreen  = homeScreen

let HomeScreen  = connect(
    state =>( { first:state.Login.first,last:state.Login.last, }),
    { setLogin }
)(homeScreen)

class SettingsScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Settings: AppContainer,
    },
);

export default createAppContainer(TabNavigator);
