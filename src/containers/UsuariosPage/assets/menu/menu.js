import React, { useState } from 'react';
import {
    ColumnaLista,
    ColumnaListaBase,
    FilaLista,
    FilaListaBase,
    MenuBase,
    MenuBaseLi,
    TituloLista,
    useStyles
} from './style';

export function MenuAsset(props) {
    const classes = useStyles();
    const [nuevo, setNuevo] = useState(false);

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