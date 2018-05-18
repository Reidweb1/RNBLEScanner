/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import { loadState } from './store/LocalStorage'
import { DeviceTableComponent } from './DeviceTable'
import Device from './device'
import { View } from 'react-native'

export default class App extends Component {

  render() {
    const appStore = configureStore({})
    if (!appStore) {
      return (
        <View />
      )
    } else {
      return (
        <Provider store={ appStore }>
          <DeviceTableComponent />
        </Provider>
      )
    }
  }
  
}
