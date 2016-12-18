'use strict';

var React = require('react-native');

import { Navigator } from 'react-native';

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({
    navBar: {
        backgroundColor: 'steelblue',
        opacity: 0.85
    },
    navTitle: {
        color: 'white',
        fontSize: 18
    },
    navButton: {
        //tintColor: 'white'
    },
    navButtonTextStyle: {
        color: 'white'
    },
    navButtonIcon: {
        tintColor: 'white'
    },
    fullScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: (Navigator.NavigationBar.Styles.General.NavBarHeight + 25)
    },
    veryPadded: {
        padding: 20,
    },
    edgeVeryPadded: {
        paddingLeft: 20,
        paddingRight: 20
    },
    H1: {
        fontWeight: 'bold',
        fontSize: 24
    },
    scrollview: {
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    button: {
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        borderRadius: 8,
        justifyContent: 'center'
    },
    primaryButton: {
        backgroundColor: 'steelblue'
    },
    secondaryButton: {
        backgroundColor: 'skyblue'
    },
    lightButton: {
        backgroundColor: '#ff0'
    },
    positiveButton: {
        backgroundColor: 'green'
    },
    negativeButton: {
        backgroundColor: '#ff3300'
    },
    clearButton: {
        backgroundColor: 'transparent',
        borderColor: '#333',
        borderWidth: 1
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center'
    },
    lightButtonText: {
        color: 'black'
    },
    clearButtonText: {
        color: '#333'
    },
    invertedButtonText: {
        color: 'white'
    },
    primaryButtonText: {
        color: '#fff'
    },
    secondaryButtonText: {
        color: '#2a2a2a'
    }
});