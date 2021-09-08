import React, { useState } from 'react';
import {ColumnaLista, ColumnaListaBase, FilaLista, FilaListaBase, TituloLista, useStyles} from './style';
import {CuadroLista} from "../lista/style";
import { FormAsset } from '../form/form';

export function ListaAsset(props) {
    const classes = useStyles();
    const [nuevo, setNuevo] = useState(false);
    const [listaEmpleado, setListaEmpleado] = useState([
        {
            nombre:'Jackeline Maldonado',
            dpi:'3042392400114',
            hijos:'0',
            salario: '3500'
        }
    ]);

    const nuevoEmpleado = () =>{
        setNuevo(true);
    }

    const guardarEmpleado = (data) => {
        let d = listaEmpleado;
        d.push(data);
        setListaEmpleado(d);
        setNuevo(false);
    }

    return (
        <>
            <TituloLista> EMPLEADOS </TituloLista>
            {
                nuevo
                    ? <FormAsset guardarEmpleado={guardarEmpleado.bind(this)} />
                    : <div>
                        <button
                            onClick={nuevoEmpleado.bind(this)}
                            type='button'
                            className={classes.buttonLogin} >NUEVO</button>
                        <CuadroLista>
                            <ColumnaListaBase>
                                <ColumnaLista> Nombre </ColumnaLista>
                                <ColumnaLista> Dpi </ColumnaLista>
                                <ColumnaLista> Hijos </ColumnaLista>
                                <ColumnaLista> Salario Base </ColumnaLista>
                            </ColumnaListaBase>
                            {
                                listaEmpleado.map((item, idx) => {
                                    return(
                                        <FilaListaBase key={idx}>
                                            <FilaLista> {item.nombre} </FilaLista>
                                            <FilaLista> {item.dpi} </FilaLista>
                                            <FilaLista> {item.hijos} </FilaLista>
                                            <FilaLista> {item.salario} </FilaLista>
                                        </FilaListaBase>
                                    )

                                })
                            }
                        </CuadroLista>
                    </div>
            }
        </>

    );
}