import { ADD_CHAT, DEL_CHAT } from "./actions";

const initialState = {
  chatList: []
};
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            name: action.name,
            id: `chat${state.chatList.length + 1}`,
          },
        ],
      };
    case DEL_CHAT:
      console.log(action)
      const toDelete = { ...state }
      // toDelete.chatList = toDelete.chatList.filter((elem) => elem.id !== action)
      return toDelete
    default:
      return state;
  }
};
