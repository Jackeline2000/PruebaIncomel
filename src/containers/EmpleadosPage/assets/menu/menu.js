import React, { useState } from 'react';
import {
    MenuBase,
    MenuBaseLi,
    useStyles
} from './style';

export function MenuAsset(props) {
    const classes = useStyles();
    
    const callUsuarios = () =>{
        props.callMenu('/usuarios');
    }

    const callEmpleados = () => {
        props.callMenu('/empleados');
    }

    return (
        <MenuBase>
            <MenuBaseLi onClick={callUsuarios.bind(this)}>Usuarios</MenuBaseLi>
            <MenuBaseLi onClick={callEmpleados.bind(this)}>Empleados</MenuBaseLi>
        </MenuBase>

    );
}