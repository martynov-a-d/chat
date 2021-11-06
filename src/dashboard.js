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
        }
    }
    
    user = [
        {
            name: "ALEX",
            message: "Привет, капец заморочено!)",
            time: "12:45",
        },
        {
            name: "ALEX",
            message: "Еле с гуглом сообразил как и что, к чему)))",
            time: "12:48",
        },
        {
            name: "ALEX",
            message: "Но теперь поле ввода не обнуляется",
            time: "12:48",
        },
    ];
    /**
     * 
     * @param {Введенный текст в поле Keyboard} elem 
     */
    sendMessage = (elem, name) => {

        const newMessage = {message: elem, name: name}

        this.setState({
            messages: [...this.state.messages, newMessage],
        });

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
    /**
     * 
     * @param {*} Ничего сюда на передаем))) 
     */
    componentDidUpdate() {
        const test = this.state.messages;
        if (this.state.messages.length !== this.state.messages.length - 1) {
            console.log(test);
        }

    }
}

export default Dashboard;
