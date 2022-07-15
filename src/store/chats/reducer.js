import { ADD_CHAT, DEL_CHAT, SET_CHATS } from "./actions";

const initialState = []
/**
 * 
 * @param {*} state 
 * @param {*} param1 
 * @returns 
 */
export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            name: payload,
            id: `chat${state.chatList.length + 1}`,
          },
        ],
      };
    case DEL_CHAT:
      const toDelete = { ...state }
      toDelete.chatList = toDelete.chatList.filter((elem) => elem.id !== payload)
      return toDelete
    case SET_CHATS:
      return payload
    default:
      return state;
  }
};
