import {
  alertBannerReducer,
  AlertBannerState,
  AlertBannerPayload
} from '../AlertBannerProvider'

describe('alertBannerReducer', () => {
  it('returns the expected state when open action is dispatched', () => {
    const initialState: AlertBannerState = {
      message: '',
      level: 'info',
      open: false
    }
    const actionPayload: AlertBannerPayload = {
      message: 'BANNER TEST',
      level: 'success',
      duration: 4444
    }

    expect(
      alertBannerReducer(initialState, { type: 'open', payload: actionPayload })
    ).toEqual({
      duration: 4444,
      level: 'success',
      message: 'BANNER TEST',
      open: true
    })
  })

  it('returns the expected state when close action is dispatched', () => {
    const initialState: AlertBannerState = {
      message: 'BANNER TEST',
      level: 'error',
      open: true
    }

    expect(alertBannerReducer(initialState, { type: 'close' })).toEqual({
      open: false,
      message: '',
      level: 'info',
      duration: 4000
    })
  })
})
