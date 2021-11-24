//---- import / export ----//
import React from "react";
import { NavLink } from "react-router-dom";

class ChatList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chatList: [
                {
                    name: "chat1",
                    id: "chat1",
                },
                {
                    name: "chat2",
                    id: "chat2",
                },
                {
                    name: "chat3",
                    id: "chat3",
                },
            ]
        }
    }
    /**
     * 
     * @param {*} e 
     * ---- Функция добавления нового чата ----
     */
    addNewChat = (e) => {
        e.preventDefault();
        const elem = this.state.chatList
        console.log(elem);
        const newChat_elem = `chat${elem.length + 1}`
        const newChat = {name: newChat_elem, id: newChat_elem}
        console.log(newChat);
        this.setState({
            chatList: [...this.state.chatList, newChat],
        });
    }
    /**
     * 
     * @param {*} e 
     * ---- Функция удаления выбранного чата ----
     */
    delThisChat = (e) => {
        const elem = this.state.chatList
        console.log(elem);
    }
    
    /**
     * 
     * @returns Возвращает меню чатов
     */
    render () {
        return (
            <>
                <button onClick={ this.addNewChat }>Add chat</button>
                <button onClick={ this.delThisChat }>Del chat</button>
                {this.state.chatList.map((chat) => (
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
}

export default ChatList;
