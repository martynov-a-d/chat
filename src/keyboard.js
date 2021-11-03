import React, {useState} from 'react'

function Keyboard() {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        setValue('');
    };

    return (
        <form className='keyboard_block' onSubmit={ handleSubmit }>
            <input type="text" className='keyboard_window' value={value} onChange={handleChange}/>
            <input type="submit" className='keyboard_btn' value="send" />
        </form>
    )
}

export default Keyboard;