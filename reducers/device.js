import { REFRESH_DEVICES } from '../actions/device'

export const defaultState = {
  devices: []
}

function devices (state = defaultState, action) {
  switch (action.type) {
    case REFRESH_DEVICES:
      return Object.assign({}, state, {
        devices: action.devices
      })
    default:
      return state
  }
}

export default devices
