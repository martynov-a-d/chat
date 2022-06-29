//---- import / export ----//
import Message from "../message"
import Keyboard from "../keyboard"
import "./dashboard.css"
import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { addMessageWithThunc } from "../../store/messages/actions"

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
    const messagesStore = useSelector(store => store.messages.messageList)
    /**
     * 
     * Хук возвращает объект с параметрами URL 
     */
    const { chatId } = useParams()
    /**
     * 
     * @param {Введенный текст в поле Keyboard, имя написавшего} elem 
     */
    function sendMessage(elem, name) {
        const timeAdder = newDate()
        const newMessage = { name: name, message: elem, time: timeAdder }
        test(newMessage, name)
    }
    const dispatch = useDispatch();
    /**
     * 
     * @param {*} elem Объект имя, сообщение, время
     * @param {*} name Имя
     */

    const test = (elem, name) => {
        dispatch(addMessageWithThunc(elem, name, [chatId]))
    }
    /**
     * 
     * @returns Возвращает основное окно сообщений
     * ---- Message возвращает сообщения в основное окно сообщений ----
     * ---- Keyboard возвращает окно ввода нового сообщения ----
     */
    return (
        <div className="dashboards">
            <Message messages={messagesStore[chatId]} />
            <Keyboard sendMessage={sendMessage} />
        </div>
    );
};
export default Dashboard;
/**
 * 
 * @returns Возвращает текущее время (H:M)
 */
export function newDate() {
    const Data = new Date();
    const Hour = Data.getHours()
    let Min = Data.getMinutes()
    if (Min.toString().length < 2) {
        Min = '0' + Min
    }
    return (`${Hour}:${Min}`)
};