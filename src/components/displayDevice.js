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
            // isHidden: true,
            // elDashboard: <Dashboard />,
        }
    }
    //---- Что-то пошло не так, не понял почему не работает ----//
    // componentDidUpdate() {
    //     if(this.isHidden) {
    //         this.State({
    //             elDashboard: <Dashboard />
    //         })
    //     }
    // }
    // if(isHidden) {
    //     elDashboard = <Dashboard />;
    // }
    render() {
        return (<div>
            <ChatList isHidden={this.state.isHidden}/>
            {/* { this.elDashboard } */}
            <Dashboard />
        </div>)
    }
};
export default displayDevice;