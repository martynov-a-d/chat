import Message from './message';

import Keyboard from './keyboard';
import './dashboard.css';
import React from 'react';
// import Request from './request';


// const user = Request();

class Dashboard extends React.Component{
/**
 * 
 * @param {*} props
 */
    constructor(props) {
        super(props)
        this.state = {
            messages: this.user,
        };
    };
    
    user = [
        {
            name: "ALEX",
            message: "Lorem ipsum dolor sit amet",
            time: "12:45",
        },
        {
            name: "ALEX",
            message: "Consectetur adipiscing elit",
            time: "12:48",
        },
    ];
    /**
     * 
     * @param {Введенный текст в поле Keyboard} elem 
     */
    sendMessage = (elem) => {
        console.log(elem);
            const newMessage = {message: elem,}
        
        this.setState({
            messages: [...this.state.messages, newMessage],
        });
        console.log(this.state.messages);
    }
    /**
     * 
     * @returns Основное окно сообщений
     */
    render() {
        return (
            <div className="dashboards">
                {/* <Message name={user.name} message={user.message} time={user.time} /> */}
                <Message messages={this.state.messages} />
                <Keyboard sendMessage={this.sendMessage} />
            </div>
        );
    }
};

export default Dashboard;
