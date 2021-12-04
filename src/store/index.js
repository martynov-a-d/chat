//---- import / export ----//
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore( 
    combineReducers({
        profile: profileReducer, 
        chats: chatsReducer, 
        messages: messagesReducer, 
    }),        
    composeEnhancers(applyMiddleware(thunk))
);