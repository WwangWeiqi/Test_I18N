/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import I18n from './i18n/i18n';
import {Button,Alert} from 'react-native';
//import DeviceInfo from 'react-native-device-info'
import RNLanguages from 'react-native-languages';
//import LocaleSet from 'react-native-i18n';
//import { getLanguages } from 'react-native-i18n';

/*getLanguages().then(languages => {
  console.log(languages); // ['en-US', 'en']
});*/

//console.log(I18n);


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
/*constructor(props){
super(props);
  this.state = {
      greeting: I18n.t('greeting')
  }
}*/

toggleLanguage = () =>{
  //Alert.alert(I18n.t('greeting'));
  I18n.locale = I18n.locale == 'zh'? 'en':'zh';
  //Alert.alert(I18n.t('greeting'));
  this.forceUpdate();
  /*var swit = I18n.t('greeting');
  this.setState({greeting: swit });*/
  }

PhoneLanguage = () => {
 Alert.alert(RNLanguages.language);
}


  render() {
     console.log("render");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{I18n.t('greeting')}</Text>
        <Text style={styles.instructions}>{I18n.t('name')}</Text>
        <Button  title={I18n.t('btnContent')} onPress = {this.toggleLanguage}></Button>
         <Button title='本机语言' onPress = {this.PhoneLanguage}></Button>
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
