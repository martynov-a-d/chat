//---- import / export ----//
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addChat } from "../store/chats/actions";

export const ChatList = () => {
    
    const chats = useSelector((state) => state.chats.chatList)
    const dispatch = useDispatch()
    /**
     * 
     * @param {*} e 
     * ---- Функция добавления нового чата ----
     */
    const addNewChat = (e) => {
        e.preventDefault();
        const elem = chats
        const newChat = `chat${elem.length + 1}`
        test(newChat)
    }
    /**
     * 
     * @param {*} chatName 
     */
    const test = (chatName) => {
        dispatch(addChat(chatName))
    }

    /**
     * 
     * @param {*} e 
     * ---- Функция удаления выбранного чата ----
     */
    const delThisChat = (e) => {
        const elem = chats
        console.log(elem);
    }

    /**
     * 
     * @returns Возвращает меню чатов
     */
    console.log(chats);
    return (
        <>
            <button onClick={ addNewChat }>Add chat</button>
            <button onClick={ delThisChat }>Del chat</button>
            {chats.map((chat) => (
                <NavLink
                    style={({ isActive }) => ({ color: isActive ? "white" : "grey" })} 
                    to = {`/chats/${chat.id}`} key={chat.id}
                    >
                        {chat.name}
                </NavLink>
            ))}        
        </>
    )

}

export default ChatList;
