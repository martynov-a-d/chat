import React from 'react';
/**
 * 
 * @returns Возвращает окно ввода сообщения и кнопку оптравки сообщения
 */
class Keyboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            name: "ALEX",
        }
    }
/**
 * 
 * @param {Событие} e 
 */
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }
/**
 * 
 * @param {Событие} e 
 */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessage(this.state.value, this.state.name)
        this.setState({
            value: '',
        });
    }
    render() {
        return (
            <form className="keyboard_block" onSubmit={ this.handleSubmit }>
                <input type="text" className="keyboard_window" value={ this.value } onChange={ this.handleChange }/>
                <input type="submit" className="keyboard_btn" value="send" />
            </form>
        );
    }
}
export default Keyboard;
