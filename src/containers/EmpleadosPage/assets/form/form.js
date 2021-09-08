import React, { useState } from 'react';
import {useStyles} from './style';

export function FormAsset(props) {
    const [nombre, setNombre] = useState("");
    const [dpi, setDpi] = useState("");
    const [salario, setSalario] = useState("");
    const [hijos, setHijos] = useState("");


    const classes = useStyles();

    const EmpleadoNuevo = () => {
        const jsonData = {
            "nombre": nombre,
            "dpi":dpi,
            "salario":salario,
            "hijos":hijos
        };
       props.guardarEmpleado(jsonData);
    }

    return (
        <>
            <form className={classes.login}>
                <input
                    onChange={(e) => { setNombre(e.target.value) }}
                    className={classes.input}
                    type="text" placeholder="Nombre" />
                <input
                    onChange={(e) => { setDpi(e.target.value) }}
                    className={classes.input}
                    type="text" placeholder="DPI" />
                <input
                    onChange={(e) => { setSalario(e.target.value) }}
                    className={classes.input}
                    type="text" placeholder="Salario Base" />
                <input
                    onChange={(e) => { setHijos(e.target.value) }}
                    className={classes.input}
                    type="text" placeholder="Hijos" />
                <button
                    onClick={EmpleadoNuevo.bind(this)}
                    type='button'
                    className={classes.buttonLogin} >Crear Empleado</button>
            </form>
        </>
    );
}