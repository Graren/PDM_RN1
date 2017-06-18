import React, { PropTypes } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { StackNavigator, StackRouter, createNavigationContainer,createNavigator,CardStack } from 'react-navigation'
import LoginScreen from './LoginScreen'

export default StackNavigator({
  LoginScreen : { screen : LoginScreen },
},{
  initialRouteName: 'LoginScreen',
  headerMode: 'none',
})
