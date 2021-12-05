//---- import / export ----//
import './chats.css';
import DisplayDevice from '../displayDevice'

/**
 * 
 * @returns Приложение чата
 * ---- DisplayDevice окно на весь экран устройства 100vh, 100vw ----
 */
export const Chats = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayDevice className="display_device" />
      </header>
    </div>
  )
}
