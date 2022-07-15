import { onValue, set } from "firebase/database"
import { chatsRef, getChatMsgsRefById, getChatRefById } from "../../services/firebase"

export const ADD_CHAT = "CHATS::ADD_CHAT"
export const DEL_CHAT = "CHATS::DEL_CHAT"
export const SET_CHATS = "CHATS::SET_CHATS"
/**
 * 
 * @param {*} name 
 * @returns 
 */
export const addChat = (name) => ({
  type: ADD_CHAT,
  name,
})
/**
 * 
 * @returns 
 */
export const delChat = (name) => ({
  type: DEL_CHAT,
  name,
})


export const addChatWithFB = (newChat) => () => {
  set(getChatRefById(newChat.id), newChat);
  set(getChatMsgsRefById(newChat.id), { empty: true });
}


export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
})


export const initialChat = () => (dispatch) => {
  const newChats = [];
  onValue(chatsRef, (snapshot) => {
    snapshot.forEach((elem) => {
      newChats.push(elem.val());
    });
    dispatch(setChats(newChats))
  })
}