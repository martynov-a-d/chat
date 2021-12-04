//---- import / export ----//
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const DEL_MESSAGE = 'MESSAGES::DEL_MESSAGE'
export const addMessage = (message, name, chatId) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  name,
});
export const delMessage = (chatId, toDelete) => ({
  type: DEL_MESSAGE,
  chatId,
  toDelete,
})