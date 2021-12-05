//---- import / export ----//
import { useDispatch, useSelector } from 'react-redux';
import { checkBoxToggle } from '../store/profile/actions';
/**
 * 
 * @returns Возвращает окно профиля
 */
export const Profile = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(checkBoxToggle)
    }
    return (<>
        <h2>NAME</h2>
        <input type="checkbox" checked={ state.checkbox } onClick={handleChange} />
        <p>{ state.name }</p>
    </>)
}