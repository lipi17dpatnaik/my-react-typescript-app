import { useState } from 'react';
import { login, logout } from '../store';
import { useDispatch, useSelector } from 'react-redux'

//useDispatch for modifting state
//useSelector for getting state

export const Login = () => {
    const [newUsername, setNewUserName] = useState('');
    const dispatch = useDispatch();
    const userName = useSelector((state: any) => state.user?.value.username)

    return (
        <div>
            <h1>Login {userName}</h1>
            <input onChange={(event) => setNewUserName(event.target.value)}></input>
            <button onClick={() => dispatch(login({ username: newUsername }))}>Submit Button</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}