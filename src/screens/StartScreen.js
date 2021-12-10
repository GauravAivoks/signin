import React, { Component } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

// export default function StartScreen({ navigation }) {
export default class StartScreen extends Component {
  render() {
    return (
      <Background>
        <Logo />
        <Header>Login Template</Header>
        <Paragraph data="The easiest way to start with your amazing application." >
        </Paragraph>
        <Button
          mode="contained"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => this.props.navigation.navigate('RegisterScreen')}
        >
          Sign Up
        </Button>
      </Background>
    )
  }
}
