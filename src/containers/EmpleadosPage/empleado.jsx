import React from "react";
import { ListaAsset } from './assets/lista/lista';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MenuAsset } from './assets/menu/menu';

export function EmpleadoPage(props) {
    const notify = (msj,event) => toast[event](msj);

    

    const callMenu = (url) => {
        props.history.push(url);
    }

    return <>
        <MenuAsset callMenu={callMenu.bind(this)}></MenuAsset>
        <ToastContainer />
        <ListaAsset />
    </>


}