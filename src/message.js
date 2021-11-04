/**
 * 
 * @param {принимает JSON с сервера} props 
 * @returns Рендерит сообщения в основное окно сообщений
 */
function Message(props) {
    return (
        <div className='message'>
            <p className='auhtor_name'>{ props.name }</p>
            <p className='auhtor_text'>{ props.message }</p>
            <p className='time_message'>{ props.time }</p>
        </div>
    )
};

export default Message;
