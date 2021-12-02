//---- import / export ----//
import Message from './message'
import Keyboard from './keyboard'
import './dashboard.css';
// import Request from './request'
// import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../store/messages/actions'

/**
 * Запрос API
 */
// const dataFetch = Request();
//---- Сообщения полученые с сервера ----//
// const initialState = dataFetch;
/**
 * 
 * @returns Возвращает основное окно
 */
function Dashboard() {
    // const [state, setState] = useState(initialState)
    const messagesStore = useSelector(store => store.messages.messageList)
    /**
     * 
     * Хук возвращает объект с параметрами URL 
     */
    const {chatId} = useParams()
    // const elUpdateMSG = state[chatId];
    /**
     * 
     * @param {*} Предыдущее состояние state (Надо переделать логику)
     */
    //  useEffect(() => {  // prevState
    //     /**
    //      * Если количество сообщений в state изменилось, отвечает BOT
    //      */
    //     if (messagesStore[chatId].length && 
    //         messagesStore[chatId][messagesStore[chatId].length - 1].name === "ALEX") {

    //         const interval = setInterval(() => {
    //             sendMessage("Ваше обращение принято, ожидайте)", "BOT");
    //             stopTimeout();
    //         }, 2000);
    //         /**
    //          * ---- Остановка интервала interval, если не выносить отдельно логика ломается ----
    //          */
    //         function stopTimeout () {
    //             clearTimeout(interval)
    //         };
    //     } else {
    //         // console.log(`Write ${state[chatId][state[chatId].length - 1].name}`);
    //     };
    // });
    /**
     * 
     * @param {Введенный текст в поле Keyboard, имя написавшего} elem 
     */
    function sendMessage(elem, name){
        // const idAdder = messagesStore[chatId][messagesStore[chatId].length - 1].id
        const timeAdder = newDate()
        const newMessage = {name: name, message: elem, time: timeAdder};
        test(newMessage, name)
    }
    const dispatch = useDispatch();

    const test = (elem, name) => {
      dispatch(addMessage(elem, name, messagesStore[chatId]));
    }
    /**
     * 
     * @returns Возвращает основное окно сообщений
     * ---- Message возвращает сообщения в основное окно сообщений ----
     * ---- Keyboard возвращает окно ввода нового сообщения ----
     */
    return (
        <div className="dashboards">
            {/* <Message name={user.name} message={user.message} time={user.time} /> */}
            <Message messages={messagesStore} />
            <Keyboard sendMessage={sendMessage} />
        </div>
    );
    /**
     * 
     * @returns Возвращает текущее время (H:M)
     */
};

export default Dashboard;

export function newDate() {
    const Data = new Date();
    const Hour = Data.getHours()
    let Min = Data.getMinutes()
    if (Min.toString().length < 2) {
        Min = '0' + Min;
    }
    return (`${Hour}:${Min}`)
};