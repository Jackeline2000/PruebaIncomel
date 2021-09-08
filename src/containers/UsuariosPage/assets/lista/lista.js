import React, { useState } from 'react';
import {ColumnaLista, ColumnaListaBase, FilaLista, FilaListaBase, TituloLista, useStyles} from './style';
import {CuadroLista} from "../lista/style";
import { FormAsset } from '../form/form';

export function ListaAsset(props) {
    const classes = useStyles();
    const [nuevo, setNuevo] = useState(false);
    const [listaUsuario, setListaUsuario] = useState([
        {
            nombre:'Jackeline Maldonado',
            email:'Jackeline.maldonado@gmail.com',
            fecha:'28/08/2000'
        }
    ]);

    const nuevoUsuario = () =>{
        setNuevo(true);
    }

    const guardarUsuario = (data) => {
        let d = listaUsuario;
        d.push(data);
        setListaUsuario(d);
        setNuevo(false);
    }

    return (
        <>
            <TituloLista> USUARIOS </TituloLista>
            {
                nuevo
                    ? <FormAsset guardarUsuario={guardarUsuario.bind(this)} />
                    : <div>
                        <button
                            onClick={nuevoUsuario.bind(this)}
                            type='button'
                            className={classes.buttonLogin} >NUEVO</button>
                        <CuadroLista>
                            <ColumnaListaBase>
                                <ColumnaLista> Nombre </ColumnaLista>
                                <ColumnaLista> Email </ColumnaLista>
                                <ColumnaLista> Fecha Nacimiento </ColumnaLista>
                            </ColumnaListaBase>
                            {
                                listaUsuario.map((item, idx) => {
                                    return(
                                        <FilaListaBase key={idx}>
                                            <FilaLista> {item.nombre} </FilaLista>
                                            <FilaLista> {item.email} </FilaLista>
                                            <FilaLista> {item.fecha} </FilaLista>
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