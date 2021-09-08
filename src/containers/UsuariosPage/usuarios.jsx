import React from "react";
import { ListaAsset } from './assets/lista/lista';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MenuAsset } from './assets/menu/menu';

export function UsuariosPage(props) {
    const notify = (msj,event) => toast[event](msj);

    const GuardarUsuario = (obj) => {
        if (obj) {
            try{

            } catch (e) {
                notify(JSON.stringify(e.response.data), 'error');
            }
        }
    }

    const callMenu = (url) => {
        props.history.push(url);
    }

    return <>
        <MenuAsset callMenu={callMenu.bind(this)} />
        <ToastContainer />
        <ListaAsset/>
    </>


}