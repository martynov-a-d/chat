import Dashboard from './dashboard';
import Message from './message';
/**
 * 
 * @returns Данные сообщений
 */
function Request() {
    return (
        fetch('https://raw.githubusercontent.com/lovealex574/chat/hw_2/src/dataMessage.json')
            .then(response => response.json())
            .then(result => console.log(result))
            .then(result => Dashboard(result))
            .then(result => Message(result))
    )
}

export default Request;
