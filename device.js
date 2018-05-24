import { AsyncStorage } from 'react-native'

const deviceStoreKey = 'deviceStoreKey'

export default class Device {

  static storeDevice = async (deviceObject) => {
    let devices = await Device.getDevices()
    if (!devices) {
      devices = [deviceObject.id]
    } else {
      console.log('Devices? ', devices)
      for (const device of devices) {
        console.log('Comparing Ids: ', device.id, ' with ', deviceObject.id)
        if (device === deviceObject.id) {
          console.log('GOT DUPE!')
          return
        }
      }
      devices.push(deviceObject.id)
    }
    return AsyncStorage.setItem(deviceStoreKey, JSON.stringify(devices))
  }

  static getDevices = async () => {
    const data = await AsyncStorage.getItem(deviceStoreKey)
		if (!data) {
			return null
    }
		return JSON.parse(data)
  }

  static clearDevices = async () => {
    return AsyncStorage.clear()
  }

  static getUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
      return v.toString(16)
    })
  }

}
