import './chats.css';
import DisplayDevice from '../displayDevice'
// import { useParams } from 'react-router';
/**
 * 
 * @returns Приложение чата
 */
export const Chats = () => {

  // { chatId } = useParams()

  return (
    <div className="App">
      <header className="App-header">
        <DisplayDevice className="display_device" />
      </header>
    </div>
  )
}
