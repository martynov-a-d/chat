import React from 'react'

class Message extends React.Component {
    /**
     * 
     * @returns Рендерит сообщения в основное окно сообщений
     */
    render() {
        return (
            <>
                {this.props.messages.map(message => {
                    return(
                        <div className="message" key={message.id}>
                            <p className="auhtor_name">{ message.name }</p>
                            <p className="auhtor_text">{ message.message }</p>
                            <p className="time_message">{ message.time }</p>
                        </div>
                    )
                })
                }
            </>  
        )
    }
}
export default Message;
