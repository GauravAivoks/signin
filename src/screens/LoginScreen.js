import React, { Component, useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState({ value: '', error: '' })
//   const [password, setPassword] = useState({ value: '', error: '' })

//   const onLoginPressed = () => {
//     const emailError = emailValidator(email.value)
//     const passwordError = passwordValidator(password.value)
//     if (emailError || passwordError) {
//       setEmail({ ...email, error: emailError })
//       setPassword({ ...password, error: passwordError })
//       return
//     }
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Dashboard' }],
//     })
//   }

//   return (
//     <Background>
//       <BackButton goBack={navigation.goBack} />
//       <Logo />
//       <Header>Welcome back.</Header>
//       <TextInput
//         label="Email"
//         returnKeyType="next"
//         value={email.value}
//         onChangeText={(text) => setEmail({ value: text, error: '' })}
//         error={!!email.error}
//         errorText={email.error}
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//         keyboardType="email-address"
//       />
//       <TextInput
//         label="Password"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={(text) => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />
//       <View style={styles.forgotPassword}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('ResetPasswordScreen')}
//         >
//           <Text style={styles.forgot}>Forgot your password?</Text>
//         </TouchableOpacity>
//       </View>
//       <Button mode="contained" onPress={onLoginPressed}>
//         Login
//       </Button>
//       <View style={styles.row}>
//         <Text>Don’t have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
//           <Text style={styles.link}>Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </Background>
//   )
// }

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: { value: '', error: '' },
      password: { value: '', error: '' },
    }
  }

  onLoginPressed = () => {
    console.log(this.state.email.value, "test")
    console.log(emailError, "succces")
    const emailError = emailValidator(this.state.email.value)
    const passwordError = passwordValidator(this.state.password.value)
    if (emailError || passwordError) {
      // setTodos({...todos, [todo.id]: todo});
      console.log(...this.state.email.error, "jjjj", emailError, "mintooo")
      this.setState({ email: { ...this.state.email, error: emailError } })
      this.setState({ password: { ...this.state.password, error: passwordError } })
      return
    }
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }
  render() {
    return (
      <Background>
        <BackButton goBack={this.props.navigation.goBack} />
        <Logo />
        <Header>Welcome back.</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={this.state.email.value}
          onChangeText={(text) => this.setState({ email: { ...this.state.email, value: text, error: '' } })}
          error={!!this.state.email.error}
          errorText={this.state.email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={this.state.password.value}
          onChangeText={(text) => this.setState({ password: { ...this.state.password, value: text, error: '' } })}
          error={!!this.state.password.error}
          errorText={this.state.password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained"
          // onPress={onLoginPressed}
          onPress={() => { this.onLoginPressed() }}
        >
          Login
        </Button>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => this.props.navigation.replace('RegisterScreen')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
