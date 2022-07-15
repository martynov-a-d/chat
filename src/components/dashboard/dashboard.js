//---- import / export ----//
import Message from "../message"
import Keyboard from "../keyboard"
import "./dashboard.css"
import { useParams } from "react-router"
import { useEffect } from "react"
import { push } from "firebase/database"
import { getChatMsgsListRefById } from "../../services/firebase"
import { useDispatch, useSelector } from "react-redux"
import { initMessages } from "../../store/messages/actions"

/**
 * 
 * @returns Возвращает основное окно
 */
function Dashboard() {
    const messagesStore = useSelector(store => store.messages)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initMessages())
    }, [dispatch]);

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
        const timeAdder = newDate();
        const newMessage = { name: name, message: elem, time: timeAdder.time, messageId: timeAdder.messageId };
        push(getChatMsgsListRefById(chatId), newMessage);
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
    return ({ time: `${Hour}:${Min}`, messageId: `${Date.parse(Data)}` })
};