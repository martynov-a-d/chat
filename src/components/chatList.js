import { NavLink } from "react-router-dom";

const chatList = [
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
/**
 * 
 * @returns Возвращает меню чатов
 */
export const ChatList = () => {
    return (
        <>
            <p>Add chat</p>
            <p>Del chat</p>
            {chatList.map((chat) => (
                <NavLink
                    style={({ isActive }) => ({ color: isActive ? "white" : "grey" })} 
                    to = {`/chats/${chat.id}`} key={chat.id}
                    >
                        {chat.name}
                </NavLink>
            ))}        
        </>
    )
};
