//---- import / export ----//
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const addMessage = (message, name, chatId) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  name,
});