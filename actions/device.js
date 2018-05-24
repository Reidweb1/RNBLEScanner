import { Dispatch, Action, ActionCreatorsMapObject } from 'redux'
import Device from '../device'

export const REFRESH_DEVICES = 'REFRESH_DEVICES'

export const refreshDevices = (device) => (dispatch) => {
  console.log('Storing Device?')
  return Device.storeDevice(device)
    .then(() => {
      return Device.getDevices()
    })
    .then((devices) => {
      return refreshDevicesAction(devices)
    })
    .then((action) => {
      return dispatch(action)
    })
}

const refreshDevicesAction = (devices) => {
  return {
    receivedAt: Date.now(),
    type: REFRESH_DEVICES,
    devices: devices
  }
}

export const DeviceActions = {
  refreshDevices
}
