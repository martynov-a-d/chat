import React from 'react'
import { useParams } from 'react-router';

class Message extends React.Component {
    componentDidMount() {
        const params = useParams
        const test23 = this.props.messages;
        console.log(test23, params);
    }
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
