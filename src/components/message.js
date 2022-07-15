//---- import / export ----//
import React from 'react'
function Message(props) {
    /**
     * 
     * @returns Рендерит сообщения в основное окно сообщений
     */
    if (typeof props.messages == "undefined") {
        return (
            <></>
        )
    } else {
        return (
            <>
                {props.messages.map(message => {
                    return (
                        <div className="message" key={message.messageId}>
                            <p className="auhtor_name">{message.name}</p>
                            <p className="auhtor_text">{message.message}</p>
                            <p className="time_message">{message.time}</p>
                        </div>
                    )
                })
                }
            </>
        )
    }
}
export default Message;
