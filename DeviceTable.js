import React from 'react'
import DeviceCell from './DeviceCell'
import { FlatList, Dimensions, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from './actions/index'
import { BleManager } from 'react-native-ble-plx'
import { Platform } from 'react-native'

class DeviceTable extends React.Component {

  componentWillMount() {
    this.manager = new BleManager()
    if (Platform.OS === 'ios') {
      this.manager.onStateChange((state) => {
        if (state === 'PoweredOn') this.scanAndConnect()
      })
    } else {
      this.scanAndConnect()
    }
  }

  scanAndConnect() {
    this.manager.startDeviceScan(null,
                                 null, (error, device) => {
      if (error) {
        throw error
      }
      this.refreshDeviceData(device)
    })
  }

  refreshDeviceData = async (device) => {
    return this.props.deviceActions.refreshDevices(device)
  }

  render() {
    return (
      <FlatList data={ this.props.data }
                style={ styles.table }
                renderItem={ this.cellForItem }
                keyExtractor={ (item, index) => item }/>
    )
  }

  cellForItem = (item) => {
    return (
      <DeviceCell device={ item.item } />
    )
  }

}

function mapStateToProps(state) {
	return {
		data: state.device.devices
	}
}

function mapDispatchToProps(dispatch) {
	return {
		deviceActions: bindActionCreators(Actions.DeviceActions, dispatch)
	}
}

export const DeviceTableComponent = connect(mapStateToProps, mapDispatchToProps)(DeviceTable)

const styles = StyleSheet.create({
  table: {
    backgroundColor: '#c1c1c1',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }
})
