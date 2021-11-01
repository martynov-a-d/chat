function Message(props) {
    return (
        <div className='message'>
            <p className='auhtor_name'>{ props.name }</p>
            <p className='auhtor_text'>{ props.message }</p>
        </div>
    )
};

export default Message;
