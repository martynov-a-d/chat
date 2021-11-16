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
    addNewChat = (e) => {
        e.preventDefault();
        const elem = this.state.chatList
        console.log(elem);
        const chat = this.test43()
        const newChat = {name: chat, id: chat}
        console.log(newChat);
        this.setState({
            chatList: [...this.state.chatList, newChat],
        })
        // this.chatList.push({name: "chat"+(elem+1), id: "chat"+(elem+1)})
    }
    test43() {
        const test53 = this.state.chatList
        const test63 = test53[test53.lenght - 1].name
        const newChat = ("chat" + test63)
        console.log(newChat);
    }
    /**
     * 
     * @returns Возвращает меню чатов
     */
    render () {
        return (
            <>
                <button onClick={ this.addNewChat }>Add chat</button>
                <button>Del chat</button>
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
