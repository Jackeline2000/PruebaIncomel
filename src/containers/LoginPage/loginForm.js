import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));



export function LoginForm(props) {
    const classes = useStyles();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const login = (evt) => {
        evt.preventDefault();
        const jsonData = {
            "appId": "RTI",
            "data": {
                "password": password,
                "userName": user
            }
        };

        props.dataLogin(jsonData);
    }

    return (
        <div className="container">
            <section id="content">
                <form className={classes.root} noValidate autoComplete="off" onSubmit={login}>

                    <TextField style={{width:'250px'}} label="Username/Email" id="user" defaultValue="" size="small" onChange={e => setUser(e.target.value)} />
                    <TextField type="password" style={{width:'250px',marginTop:'0px'}} label="Password" id="password" defaultValue="" size="small" onChange={e => setPassword(e.target.value)}  />
                    <div>
                        <input style={{marginLeft: '50px'}} type="submit" value="Ingresar" />
                    </div>
                </form>

            </section>
        </div>
    );
}