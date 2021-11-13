//---- import / export ----//
import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Chats } from './components/chats/chats'
import { Home } from './components/home'
/**
 * 
 * @returns Возвращает приложение 
 */
export const App = () => {
  return (<BrowserRouter>
    <ul>
      <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "chats">Chats</Link>
        </li>
    </ul>

    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/chats" element={ <Chats /> } />
    </Routes>
  </BrowserRouter>
)}
