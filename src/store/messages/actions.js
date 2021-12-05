//---- import / export ----//
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE"
export const DEL_MESSAGE = "MESSAGES::DEL_MESSAGE"
/**
 * 
 * @param {*} message 
 * @param {*} name 
 * @param {*} chatId 
 * @returns 
 */
export const addMessage = (message, name, chatId) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  name,
})
/**
 * 
 * @param {*} chatId 
 * @param {*} toDelete 
 * @returns 
 */
export const delMessage = (chatId, toDelete) => ({
  type: DEL_MESSAGE,
  chatId,
  toDelete,
})

let timeout;
/**
 * 
 * @param {*} message 
 * @param {*} name 
 * @param {*} chatId 
 * @returns 
 */
export const addMessageWithThunc = (message, name, chatId) => (dispatch) => {
  dispatch(addMessage(message, name, chatId))

  if(name !== "BOT") {
    if(timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      const botMessage = {name: "BOT", message: "i am a bot", time: message.time}

      dispatch(addMessage(botMessage, name, chatId))
    }, 1500);
  }

}