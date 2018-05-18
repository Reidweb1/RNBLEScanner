import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class DeviceCell extends React.Component {

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.label }>ID: { this.props.device }</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
		justifyContent: 'center'
  },
  label: {
    color: '#242420',
		fontSize: 16,
		marginTop: 18,
		marginLeft: 16,
		flex: 1
  }
})
