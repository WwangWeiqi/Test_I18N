/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import I18n from './i18n/i18n'
//import LocaleSet from 'react-native-i18n';
//import { getLanguages } from 'react-native-i18n';

/*getLanguages().then(languages => {
  console.log(languages); // ['en-US', 'en']
});*/

import I18n from 'react-native-i18n';
import en from './en/en.js';
import zh from './zh/zh.js';

I18n.fallbacks = true;

I18n.translations = {
    zh,
    en
}

//console.log(I18n);


import {Button,Alert} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};






export default class App extends Component<Props> {
constructor(props){
super(props);
  this.state = {
      greeting: I18n.t('greeting')
  }
}

toggleLanguage = () =>{
  //Alert.alert(I18n.t('greeting'));
  I18n.locale = I18n.locale == 'zh'? 'en':'zh';
  var swit = I18n.t('greeting');
  this.setState({greeting: swit });
  }

  render() {
     //console.log("sssssssssssssssss");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.greeting}</Text>
        <Button title="Switch Language" onPress = {this.toggleLanguage}></Button>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
