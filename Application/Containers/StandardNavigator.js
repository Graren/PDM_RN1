import React, { PropTypes } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { StackNavigator, StackRouter, createNavigationContainer,createNavigator,CardStack } from 'react-navigation'
// import LoginScreen from './LoginScreen'
// import Dashboard from './Dashboard'

LoginScreen = require('./LoginScreen')
Dashboard = require('./Dashboard')

StackNav = StackNavigator({
  LoginScreen : { screen : LoginScreen },
  Dashboard: { screen: Dashboard }
},{
  initialRouteName: 'LoginScreen',
  headerMode: 'none',
})

module.exports = StackNav;