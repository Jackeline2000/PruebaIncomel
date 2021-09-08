import React, { useState } from 'react';
import {useStyles} from './style';

export function FormAsset(props) {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");

    const classes = useStyles();

    const UsuarioNuevo = () => {
        const jsonData = {
            "nombre": nombre,
            "email":email,
            "fecha":fecha
        };
       props.guardarUsuario(jsonData);
    }

    return (
        <>
            <form className={classes.login}>
                <input
                    onChange={(e) => { setNombre(e.target.value) }}
                    className={classes.input}
                    type="text" placeholder="Nombre" />
                <input
                    onChange={(e) => { setEmail(e.target.value) }}
                    className={classes.input}
                    type="text"
                    placeholder="Email" />
                <input
                    onChange={(e) => { setFecha(e.target.value) }}
                    className={classes.input}
                    type="date"
                    placeholder="Fecha de nacimiento" />
                <button
                    onClick={UsuarioNuevo.bind(this)}
                    type='button'
                    className={classes.buttonLogin} >Crear Usuario</button>
            </form>
        </>
    );
}