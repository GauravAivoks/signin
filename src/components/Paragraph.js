import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { StartScreen } from '../screens';
// export default function Paragraph(props) {
export default class Paragraph extends Component {
  state = {
    text: this.props.data
  };
  render() {
    return <Text style={styles.text} >{this.state.text} </Text>
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
})