//---- import / export ----//
import { ADD_MESSAGE } from "./actions";

const initialState = {
  messageList: {
    chat1: [
        {
            name: "ALEX",
            message: "Привет, капец заморочено!)",
            time: "12:45",
            id: 1,
        },
        {
            name: "ALEX",
            message: "Еле с гуглом сообразил как и что, к чему)))",
            time: "12:48",
            id: 2,
        },
        {
            name: "ALEX",
            message: "Но теперь поле ввода не обнуляется",
            time: "12:48",
            id: 3,
        },
    ],
    chat2: [
        {
            name: "ALEX",
            message: "Привет!)",
            time: "14:08",
            id: 1,
        }
    ],
    chat3: [
        {
            
        }
    ],
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
