import { call, put, takeLatest, delay } from 'redux-saga/effects'
import { addMessage } from './messages/actions'

function* onAddMessageWithSaga(message, name, chatId) {
    yield put(addMessage(message, name, chatId))
    if (message.author !== "BOT") {
        const botMessage = { name: "BOT", message: "i am a bot", time: message.time }
        yield delay(2000)
        yield put(addMessage(botMessage, name, chatId))
    }
}
function* mySaga() {
    yield takeLatest("MESSAGES::ADD_MESSAGE", onAddMessageWithSaga)
}
export default mySaga;