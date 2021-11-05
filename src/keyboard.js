import React from "react";
import { sendMessage } from "./dashboard";
/**
 * 
 * @returns Возвращает окно ввода сообщения и кнопку оптравки сообщения
 */
class Keyboard extends React.Component {

    constructor() {
        super()
        this.state = {
            value: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(this.state.value)
        this.setState({
            value: ''
        });
    };
    render() {
        return (
            <form className='keyboard_block' onSubmit={ this.handleSubmit }>
                <input type="text" className='keyboard_window' value={ this.value } onChange={ this.handleChange }/>
                <input type="submit" className='keyboard_btn' value="send" />
            </form>
        )
    }
}
export default Keyboard;
