export const ADD_CHAT = "CHATS::ADD_CHAT"
export const DEL_CHAT = "CHATS::DEL_CHAT"
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
  name
})