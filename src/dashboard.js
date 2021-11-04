import Message from './message';

import Keyboard from './keyboard';
import './dashboard.css';
import React from 'react';
// import Request from './request';


// const user = Request();
/**
 * 
 * @returns Основное окно сообщений
 */
class Dashboard extends React.Component{

    constructor() {
        super()
        this.state = {
            messages: this.user,
        }
    };
    
    user = [
        {
            name: "ALEX",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            time: "12:45",
        },
    ];
render(){
    return (
        <div className="dashboards">
            {/* <Message name={user.name} message={user.message} time={user.time} /> */}
            <Message messages={this.state.messages} />
            <Keyboard />
        </div>
    );}
};

export default Dashboard;
