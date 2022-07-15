//---- import / export ----//
import { ADD_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DEL_MESSAGE, SET_MESSAGES } from "./actions";

const initialState = []
/**
 * 
 * @param {*} state 
 * @param {*} param1 
 * @returns 
 */
export const messagesReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    /**
     * Добавляет новое сообщение
     */
    case ADD_MESSAGE: {
      const currentList = state.messagesList[payload.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messagesList,
          [payload.chatId]: [
            ...currentList,
            {
              ...payload.message,
              // id - Состоит из номера чата и количества объектов
              id: `${payload.chatId}${currentList.length}`,
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
          ...state.messagesList,
          [payload.name]: []
        }
      }
    /**
     * Удаляет выбраное сообщение
     */
    case DEL_MESSAGE: {
      return
    }
    case SET_MESSAGES:
      return payload
    default:
      return state;
  }
};
