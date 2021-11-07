import Message from './message'
import Keyboard from './keyboard'
import './dashboard.css'
import React from 'react'
// import Request from './request'
// const user = Request()
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
    };
    //---- Не забудь заменить это, на API ----//
    user = [
        {
            name: "ALEX",
            message: "Привет, капец заморочено!)",
            time: "12:45",
            id: 1,
        },
        {
            name: "ALEX",
            message: "Еле с гуглом сообразил как и что, к чему)))",
            time: "12:48",
            id: 2,
        },
        {
            name: "ALEX",
            message: "Но теперь поле ввода не обнуляется",
            time: "12:48",
            id: 3,
        },
    ];
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
        const Min = Data.getMinutes()
        return (`${Hour}:${Min}`)
    }
    /**
     * 
     * @param {*} Ничего сюда на передаем))) 
     */
    componentDidUpdate() {
        const elUpdateMSG = this.state.messages;
        if (elUpdateMSG.length && elUpdateMSG[elUpdateMSG.length - 1].name === "ALEX") {
            console.log(elUpdateMSG);
            const interval = setInterval(() => {
                this.sendMessage("Ваше обращение принято, ожидайте)", "BOT");
                stopTimeout()
            }, 2000);
            function stopTimeout () {
                clearTimeout(interval)
            } 
        } else {
            console.log(`Write ${elUpdateMSG[elUpdateMSG.length - 1].name}`);
        }
    }
};
export default Dashboard;
