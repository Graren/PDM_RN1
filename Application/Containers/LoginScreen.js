import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
// import Images from '../Themes/images'
// import Metrics from '../Themes/metrics'

Images = require('../Themes/images')
Metrics = require('../Themes/metrics')

class LoginScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      dummyCredentials: {
        username:"oliverqueen",
        password:"Holi"
      },
    }
  }

  onUsernameChange(username){
    this.setState({username})
  }

  onPasswordChange(password){
    this.setState({password})
  }

  onLogin(){
    const { navigate } = this.props.navigation ? this.props.navigation : {navigate: () => console.log("hi")};
    if( this.state.username === this.state.dummyCredentials.username
        && this.state.password == this.state.dummyCredentials.password ){
          Alert.alert(
            'Login',
            'You have logged In!',
            [
              {text: 'OK', onPress: () => {
                navigate('Dashboard')
              }},
            ]
          )
    }
    else {
          Alert.alert(
            'Login',
            ':(',
            [
              {text: 'OK'},
            ]
          )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.backgroundImage}>
          <View style={styles.loginContainer}>
            <TextInput
              onChangeText={(text) => this.onUsernameChange(text)}
              style={styles.coalColored}
              selectionColor='#2d2d2d'
              underlineColorAndroid='#2d2d2d'
              placeholder="username"
            />
            <TextInput
              onChangeText={(text) => this.onPasswordChange(text)}
              secureTextEntry={true}
              style={styles.coalColored}
              selectionColor='#2d2d2d'
              underlineColorAndroid='#2d2d2d'
              placeholder="password"
            />
            <TouchableOpacity style={styles.button} onPress={() => this.onLogin()} >
              <View style={styles.actualButton}>
                <Text style={styles.coalColored}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  loginContainer: {
    flex:1,
    padding:10,
    backgroundColor: 'transparent',
    maxWidth: 0.8*Metrics.screenWidth,
    width:0.8*Metrics.screenWidth,
    justifyContent: 'center',
    borderRadius:2,
    height: 0.4*Metrics.screenHeight,
    maxHeight:0.4*Metrics.screenHeight,
    minWidth: 0.8*Metrics.screenWidth,
    minHeight:0.4*Metrics.screenHeight,
  },
    backgroundImage: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain', // or 'stretch'
  },
  button:{
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actualButton:{
    padding:4,
    borderRadius: 2,
    backgroundColor : 'transparent'
  },
  coalColored:{
    color: '#2d2d2d'
  }
});

module.exports = LoginScreen;