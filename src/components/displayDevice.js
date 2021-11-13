import React from 'react';
import ChatList from './chatList'
import Dashboard from './dashboard';
/**
 * 
 * @returns Возвращает окно чата
 */
class displayDevice extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true,
            elDashboard: '',
        }
    }
    //---- Необходимо посмотреть что не работает ----//
    componentDidUpdate() {
        if(this.isHidden) {
            this.setState({
                elDashboard: <Dashboard />
            })
        }
    }
    /**
     * 
     * @returns Возвращает список чатов и окно сообщений
     */
    render() {
        return (<div>
            <ChatList isHidden={this.state.isHidden}/>
            { this.elDashboard }
            <Dashboard />
        </div>)
    }
};
export default displayDevice;