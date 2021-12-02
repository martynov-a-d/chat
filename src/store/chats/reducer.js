import { ADD_CHAT } from "./actions";

const initialState = {
  chatList: [
    {
        name: "chat1",
        id: "chat1",
    },
    {
        name: "chat2",
        id: "chat2",
    },
    {
        name: "chat3",
        id: "chat3",
    },
  ]
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CHAT:
        return {
          ...state,
          chatList: [
            ...state.chatList,
            {
              id: `id${state.chatList.length}`,
              name: action.name,
            },
          ],
        };
        default:
          return state;
    }
};
