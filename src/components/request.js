
/**
 * 
 * @returns Данные сообщений
 */
function Request() {
        //---- Не забудь заменить это, на API ----//


        
        return  {
            chat1: [
                {
                    name: "ALEX",
                    message: "Привет, капец заморочено!)",
                    time: "12:45",
                    id: 1,
                },
                {
                    name: "ALEX",
                    message: "Еле с гуглом сообразил как и что, к чему)))",
                    time: "12:48",
                    id: 2,
                },
                {
                    name: "ALEX",
                    message: "Но теперь поле ввода не обнуляется",
                    time: "12:48",
                    id: 3,
                },
            ],
            chat2: [
                {
                    name: "ALEX",
                    message: "Привет!)",
                    time: "14:08",
                    id: 1,
                }
            ],
            chat3: [
                {
                    
                }
            ],
    }

    // return (
    //     fetch('https://raw.githubusercontent.com/lovealex574/chat/hw_2/src/dataMessage.json')
    //         .then(response => response.json())
    //         .then(result => console.log(result))
    // )
};
export default Request;
