
import './App.css';
import DisplayDevice from './displayDevice'
/**
 * 
 * @returns Приложение чата
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayDevice className="display_device" />
      </header>
    </div>
  );
}

export default App;
