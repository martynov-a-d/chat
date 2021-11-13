import Message from './message'
import Keyboard from './keyboard'
import './dashboard.css'
import React from 'react'
import Request from './request'
class Dashboard extends React.Component{
/**
 * 
 * @param {*} props
 */
    constructor(props) {
        super(props)
        this.state = {
            //---- Сообщения полученые с сервера ----//
            messages: this.dataFetch,
        }
    };
    /**
     * Запрос API
     */
    dataFetch = Request();
    /**
     * 
     * @param {Введенный текст в поле Keyboard} elem 
     */
    sendMessage = (elem, name) => {
        const elUpdateMSG = this.state.messages;
        const idAdder = elUpdateMSG[elUpdateMSG.length - 1].id;
        const timeAdder = this.newDate();
        const newMessage = {name: name, message: elem, id: idAdder + 1, time: timeAdder}
        // console.log(elUpdateMSG[elUpdateMSG.length - 2].id);
        this.setState({
            messages: [...this.state.messages, newMessage],
        })
    }
    /**
     * 
     * @returns Рендерит основное окно сообщений
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
     * @returns Возвращает текущее время (H:M)
     */
    newDate() {
        const Data = new Date();
        const Hour = Data.getHours()
        let Min = Data.getMinutes()
        if (Min.toString().length < 2) {
            Min = '0' + Min;
        }
        return (`${Hour}:${Min}`)
    }
    /**
     * 
     * @param {*} Предыдущее состояние state (Надо переделать логику)
     */
    componentDidUpdate() {  // prevState
        const elUpdateMSG = this.state.messages;
        /**
         * Если количество сообщений в state изменилось, отвечает BOT
         */
        if (elUpdateMSG.length && elUpdateMSG[elUpdateMSG.length - 1].name === "ALEX") {
            // console.log(elUpdateMSG);
            const interval = setInterval(() => {
                this.sendMessage("Ваше обращение принято, ожидайте)", "BOT");
                stopTimeout()
            }, 2000);
            function stopTimeout () {
                clearTimeout(interval)
            } 
        } else {
            // console.log(`Write ${elUpdateMSG[elUpdateMSG.length - 1].name}`);
        }
    }
};
export default Dashboard;
