import Message from './message';
import './dashboard.css';
import Keyboard from './keyboard';

const userName = 'ALEX';
const userMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

// fetchData() {
//     const data = [
//         {
//             name = 'Alex',
//             message = 'Yappy',
//         },
//     ];
//     userName = data.name;

// };

function Dashboard(){
    return (
        <div className="dashboards">
            <Message name={userName} message={userMessage}/>
            <Keyboard />
        </div>
    );
};

export default Dashboard;