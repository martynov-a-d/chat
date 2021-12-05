//---- import / export ----//
import { ADD_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DEL_MESSAGE } from "./actions";

const initialState = {
  messageList: {
    // chat1: [
    //     {
    //         name: "ALEX",
    //         message: "Привет, капец заморочено!)",
    //         time: "12:45",
    //         id: 1,
    //     },
    // ],
    // chat2: [
    //     {
    //         name: "ALEX",
    //         message: "Привет!)",
    //         time: "14:08",
    //         id: 1,
    //     }
    // ],
    // chat3: [

    // ],
  },  
};
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * Добавляет новое сообщение
     */
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              ...action.message,
              // id - Состоит из номера чата и количества объектов
              id: `${action.chatId}${currentList.length}`,
            },
          ],
        },
      };
    }
    /**
     * Добавляет пустой массив в storeMessage при добавлении нового чата
     */
    case ADD_CHAT: 
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.name]: []
        }
      }
    /**
     * Удаляет выбраное сообщение
     */
    case DEL_MESSAGE: {
      return
    }
    default:
      return state;
  }
};
