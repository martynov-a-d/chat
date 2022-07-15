import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Chats } from '../components/chats/chats'
import { ChatList } from '../components/chatList'
import { Home } from '../components/home'
import { Profile } from '../components/profile'
import { Articles } from '../components/additionalApi/articles'
import { PublicRoute } from '../components/PublicRoute'
import { PrivateRoute } from '../components/PrivateRoute'
import { SignUp } from '../components/singUp'
import { useEffect } from 'react'
import { auth } from '../services/firebase'
import { useDispatch } from 'react-redux'
import { signIn, singOut } from '../store/profile/actions'

export const Router = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn())
            } else {
                dispatch(singOut())
            }
        })
        return unsubscribe;
    })

    return (
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
                    <Link to="articles">Articles</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
                <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
                <Route path="/chats">
                    <Route index element={<PrivateRoute><ChatList /></PrivateRoute>} />
                    <Route path=":chatId" element={<PrivateRoute><Chats /></PrivateRoute>} />
                </Route>
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/articles" element={<Articles />} />
                <Route path="*" element={<h3>404</h3>} />
            </Routes>
        </BrowserRouter>
    )
}