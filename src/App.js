//---- import / export ----//
import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from './routes'
import './App.css'
/**
 * 
 * @returns Возвращает приложение 
 */
export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}
