import React from "react";

/**
 * 
 * @param {принимает JSON с сервера} props 
 * @returns Рендерит сообщения в основное окно сообщений
 */
class Message extends React.Component {
    render() {
        return (
            <>
                {this.props.messages.map(message => {
                    return(
                        <div className='message' key={message.name}>
                        <p className='auhtor_name'>{ message.name }</p>
                        <p className='auhtor_text'>{ message.message }</p>
                        <p className='time_message'>{ message.time }</p>
                        </div> 
                    )
                })}
            </>  
        )
    }
};

export default Message;
