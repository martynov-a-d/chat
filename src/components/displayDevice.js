import React from 'react';
import { ChatList } from './chatList'
import Dashboard from './dashboard';
/**
 * 
 * @returns Возвращает окно чата
 */
function DisplayDevice() {

    /**
     * 
     * @returns Возвращает список чатов и окно сообщений
     */
    
    return <>
        <div>
            <ChatList />
            <Dashboard />
        </div>
    </>
};

export default DisplayDevice;