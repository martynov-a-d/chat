//---- import / export ----//
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, combineReducers({
        profile: profileReducer, 
        chats: chatsReducer, 
        messages: messagesReducer, 
    })
)

export const store = createStore( 
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)