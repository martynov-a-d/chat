//---- import / export ----//
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { weatherReducer, articlesReducer } from "./additionalApi/reducer";
import thunk from "redux-thunk"
// import createSagaMiddleware from "redux-saga"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
// import mySaga from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    weather: weatherReducer,
    articles: articlesReducer,
})
)

// const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
    // composeEnhancers(applyMiddleware(sagaMiddleware))
)

// sagaMiddleware.run(mySaga)
// export const action = type => store.dispatch({ type })

export const persistor = persistStore(store)