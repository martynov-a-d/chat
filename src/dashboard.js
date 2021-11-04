import Message from './message';
import './dashboard.css';
import Keyboard from './keyboard';
// import Request from './request';

const user = {
    name: "ALEX",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: "12:45",
}
// const user = Request();
/**
 * 
 * @returns Основное окно сообщений
 */
function Dashboard(){
    return (
        <div className="dashboards">
            <Message name={user.name} message={user.message} time={user.time} />
            <Keyboard />
        </div>
    );
};

export default Dashboard;
