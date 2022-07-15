//---- import / export ----//
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addChatWithFB, initialChat } from "../store/chats/actions";

export const ChatList = () => {

    const chatList = useSelector((state) => state.chats)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialChat())
    }, [dispatch]);

    /**
     * 
     * @param {*} e 
     * ---- Функция добавления нового чата ----
     */
    const addNewChat = (e) => {
        e.preventDefault();
        const elem = chatList;
        const newChat = `chat${elem.length + 1}`;
        dispatch(addChatWithFB({ name: newChat, id: newChat }))
    }

    /**
     * 
     * @returns Возвращает меню чатов
     */
    return (
        <>
            <button onClick={addNewChat}>Add chat</button>
            {chatList.map((elem) =>
                <NavLink
                    style={({ isActive }) => ({ color: isActive ? "white" : "grey" })}
                    to={`/chats/${elem.id}`} key={elem.id}
                >
                    {elem.name}
                </NavLink>
            )}
        </>
    )

}

export default ChatList;
