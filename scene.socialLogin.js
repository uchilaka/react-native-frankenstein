import React, { Component } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { OAuthManager } from 'react-native-oauth';
import { Scene, Router, Actions } from 'react-native-router-flux';

const styles = require('./styles');

export default class SocialLogin extends Component {

    constructor(props) {
        super(props);

        const manager = new OAuthManager('Frankenstein');
        manager.configure({
            facebook: {
                client_id: '1645243489107780',
                client_secret: '8edc36d54647092b8402034028b88aed'
            }
        })

        this.doLogin = () => {
            //alert("This is logging in!");
            manager.authorize('facebook', { scopes: 'email' })
                .then(resp => {
                    alert("User ID: " + JSON.stringify(resp));
                })
                .catch(err => {
                    alert("There was an error logging you in. Sorry!")
                });
        }

        // bind function(s)
        //this.doLogin = this.doLogin.bind(this);

        // do stuff with state here
    }

    render() {
        let doLogin = this.doLogin;
        return (
            <View style={[styles.container, styles.veryPadded, { flex: 1 }]}>
                <Text style={[styles.H1, { lineHeight: 45 }]}>Access your Account</Text>
                <Text style={{ marginBottom: 15 }}>
                    Welcome to the Social Login Demo Page
                </Text>
                <Button
                    onPress={doLogin}
                    title="Login With Facebook"
                    containerStyle={[styles.button, { backgroundColor: '#3b5998', marginTop: 15 }]}
                    style={[styles.buttonText, styles.invertedButtonText]}>
                </Button>
            </View >
        )
    }

}