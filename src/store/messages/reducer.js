//---- import / export ----//
import { ADD_MESSAGE } from "./actions";

const initialState = {
  // to be stored like this {[chatId]: [{id, text, author}]}
  messageList: {},
};
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
