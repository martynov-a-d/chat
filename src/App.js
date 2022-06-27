//---- import / export ----//
import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Chats } from './components/chats/chats'
import { ChatList } from './components/chatList'
import { Home } from './components/home'
import { Profile } from './components/profile'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Weather } from './components/weather/weather'
import './App.css'
/**
 * 
 * @returns Возвращает приложение 
 */
export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="chats">Chats</Link>
            </li>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="weather">Weather</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chats">
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<Chats />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="*" element={<h3>404</h3>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}
