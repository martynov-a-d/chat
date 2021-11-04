import React, {useState} from 'react'
/**
 * 
 * @returns Возвращает окно ввода сообщения и кнопку оптравки сообщения
 */
function Keyboard() {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        render(value);
        setValue('');
    };

    return (
        <form className='keyboard_block' onSubmit={ handleSubmit }>
            <input type="text" className='keyboard_window' value={value} onChange={handleChange}/>
            <input type="submit" className='keyboard_btn' value="send" />
        </form>
    )
}
function render(test) {
    console.log(test);
}
export default Keyboard;
