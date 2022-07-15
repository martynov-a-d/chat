//---- import / export ----//
import { onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, userRef } from '../services/firebase';
import { setUserName } from '../store/profile/actions';
import { selectName } from '../store/profile/selectors';
/**
 * 
 * @returns Возвращает окно профиля
 */
export const Profile = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const username = useSelector(selectName);
    const [newUserName, setNewUserName] = useState(username);
    /**
     * Изменение имени user в db
     */
    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
            const userData = snapshot.val()
            dispatch(setUserName(userData.name))
        });
        return unsubscribe;
    });
    /**
     * Изменение имени user в сторе
     */
    const handleChange = () => {
        if (newUserName.target.value !== "") {
            set(userRef, { name: newUserName.target.value })
            newUserName.target.value = ""
            newUserName.target.placeholder = ""
        } else {
            newUserName.target.placeholder = "ВВЕДИТЕ ИМЯ"
        }
    };
    const handleOut = async () => {
        try {
            await logOut()
        } catch (err) {
            console.log(err)
        };
    };
    return (<>
        <h2>{username}</h2>
        <button onClick={handleOut}>SING OUT</button>
        <input type="text" name={newUserName} onChange={setNewUserName} />
        <button onClick={handleChange}>change name</button>
        <p>{state.name}</p>
    </>)
};