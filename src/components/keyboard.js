//---- import / export ----//
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux';
/**
 * 
 * @returns Возвращает окно ввода сообщения и кнопку оптравки сообщения
 */
function Keyboard(props) {
    const userName = useSelector(state => state.profile.name)
    const initialState = {
        value: "",
        name: userName,
    };
    const [state, setState] = useState(initialState);
    
/**
 * 
 * @param {Событие} e 
 */
    function handleChange(e) {
        setState((prevState) => ({
            ...prevState,
            value: e.target.value
        }));
    };
/**
 * 
 * @param {Событие} e 
 */
    function handleSubmit(e) {
        e.preventDefault();
        props.sendMessage(state.value, state.name)
        setState((prevState) => ({
            ...prevState,
            value: "",
        }))
    };
    /**
     * 
     * @returns Рендерит онко ввода сообщений
     */

        return (
            <form className="keyboard_block" onSubmit={ handleSubmit }>
                <input type="text" className="keyboard_window" value={ state.value } onChange={ handleChange }/>
                {/* <input type="submit" className="keyboard_btn" value="send" /> */}
                <Button variant="text" type="submit" className="keyboard_btn">send</Button>
            </form>
        )

}
export default Keyboard;
