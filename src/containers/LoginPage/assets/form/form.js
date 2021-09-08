import React, { useState } from 'react';
import {useStyles} from './view';

export function FormAsset(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const classes = useStyles();

    const login = () => {
        const jsonData = {
            "password": password,
            "usuario":user
        };
        props.infoLogin(jsonData);
    }

    return (
        <>
            <form className={classes.login}>
                <input
                    onChange={(e) => { setUser(e.target.value) }}
                    className={classes.input}
                    type="text" placeholder="Username" />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    className={classes.input}
                    type="password"
                    placeholder="Password" />
                <button
                    onClick={login.bind(this)}
                    type='button'
                    className={classes.buttonLogin} >Login</button>
            </form>
        </>
    );
}