import * as React from 'react'

type Action = { type: 'open'; payload: AlertBannerPayload } | { type: 'close' }
type Dispatch = (action: Action) => void
export type AlertBannerState = {
  open: boolean
  message: string
  level: 'error' | 'success' | 'info' | 'warning'
  duration?: number
}
export type AlertBannerPayload = Pick<
  AlertBannerState,
  'message' | 'level' | 'duration'
>

const AlertBannerContext = React.createContext<{
  state: AlertBannerState
  dispatch: Dispatch
} | null>(null)

const defaultState: AlertBannerState = {
  open: false,
  message: '',
  level: 'info',
  duration: 4000
}

export function alertBannerReducer(_: AlertBannerState, action: Action) {
  switch (action.type) {
    case 'open':
      return {
        open: true,
        ...action.payload
      }
    case 'close':
      return defaultState
    default:
      throw new Error(`Unhandled action type`)
  }
}

function AlertBannerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(alertBannerReducer, defaultState)
  const value = { state, dispatch }

  return (
    <AlertBannerContext.Provider value={value}>
      {children}
    </AlertBannerContext.Provider>
  )
}

function useAlertBanner() {
  const context = React.useContext(AlertBannerContext)

  if (!context) {
    throw new Error('useBanner must be used within an AlertBannerProvider')
  }
  return context
}

export { AlertBannerProvider, useAlertBanner }
