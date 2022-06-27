//---- import / export ----//
import React from 'react';
import ChatList from './chatList';
import Dashboard from './dashboard/dashboard';
/**
 * 
 * @returns Возвращает окно чата
 */
function DisplayDevice() {

    /**
     * 
     * @returns Возвращает 
     * ---- ChatList список чатов и ----
     * ---- Dashboard окно сообщений ----
     */

    return <>
        <div>
            <ChatList />
            <Dashboard />
        </div>
    </>
};

export default DisplayDevice;