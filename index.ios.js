import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import IndexView from './_indexView';
import FlexingScene from './scene.flexing';
import FlexboxScene from './scene.flexbox';
import JustifyContentBasics from './scene.justifyContentBasics';
import AlignItemsBasics from './scene.alignItemsBasics';
import PizzaTranslator from './scene.pizzaTranslator';

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" component={IndexView} title="Welcome" initial={true} />
        <Scene key="flex" component={FlexingScene} title="Flexing Example" />
        <Scene key="flexbox" component={FlexboxScene} title="Flexbox Example" />
        <Scene key="justifyContent" component={JustifyContentBasics} title="Justified Example" backTitle="Back" />
        <Scene key="alignItems" component={AlignItemsBasics} title="Align Items (Basics)" backTitle="Done" />
        <Scene key="pizzaTranslator" component={PizzaTranslator} title="Text Input Example" backTitle="Home" />
    </Scene>
);

class HelloWorld extends React.Component {
    render() {
        return <Router
            scenes={scenes}
            navigationBarStyle={styles.navBar}
            leftButtonStyle={styles.navButton}
            leftButtonIconStyle={styles.navButtonIcon}
            //backTitle="Back"
            backButtonTextStyle={styles.navButtonTextStyle}
            titleStyle={styles.navTitle} />
    }
}

const styles = require('./styles');

AppRegistry.registerComponent('Frankenstein', () => HelloWorld);