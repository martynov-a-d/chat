//---- import / export ----//
import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Chats } from './components/chats/chats'
import ChatList from './components/chatList'
import { Home } from './components/home'
import { Profile } from './components/profile'
/**
 * 
 * @returns Возвращает приложение 
 */
export const App = () => {
  return (
  <BrowserRouter>
    <ul>
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "chats">Chats</Link>
        </li>
        <li>
          <Link to = "profile">Profile</Link>
        </li>
    </ul>
    
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/chats">
        <Route index element={ <ChatList /> } />
        <Route path=":chatId" element={ <Chats /> } />
      </Route>
      <Route path="/profile" element={ <Profile />} />
      <Route path="*" element={<h3>404</h3>} />
    </Routes>
  </BrowserRouter>
)}
