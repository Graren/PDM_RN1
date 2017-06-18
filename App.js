import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Application/Containers/LoginScreen'
import StackNav from './Application/Containers/StandardNavigator'

export default class App extends React.Component {
  render() {
    return (
      <StackNav></StackNav>  
    );
  }
}
