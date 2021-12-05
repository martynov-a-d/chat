import { ADD_CHAT, DEL_CHAT } from "./actions";

const initialState = {
  chatList: [
    // {
    //     name: "chat1",
    //     id: "chat1",
    // },
    // {
    //     name: "chat2",
    //     id: "chat2",
    // },
    // {
    //     name: "chat3",
    //     id: "chat3",
    // },
  ]
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
        return {
          
        }
      default:
          return state;
    }
};
