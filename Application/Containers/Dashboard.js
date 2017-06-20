import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
// import Images from '../Themes/images'
// import Metrics from '../Themes/metrics'

class Dashboard extends React.Component {

  render() {
    const { goBack } = this.props.navigation;
    return (
       <TouchableOpacity onPress={() => goBack()}>
            <Text>Soon dashboard, Tap to return</Text>
       </TouchableOpacity> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

module.exports = Dashboard