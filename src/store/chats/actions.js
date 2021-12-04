export const ADD_CHAT = "CHATS::ADD_CHAT";
/**
 * 
 * @param {*} name 
 * @returns 
 */
export const addChat = (name) => ({
  type: ADD_CHAT,
  name,
});