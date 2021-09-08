import React from "react";
import { FormAsset } from './assets/form/form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LoginPage(props) {
    const notify = (msj,event) => toast[event](msj);

    const infoLogin = (info) =>{
        notify('Bienvenido: ' + info.usuario,'success');
        props.history.push('/usuarios');
    }


    return <>
        <ToastContainer />
        <FormAsset
            infoLogin={infoLogin.bind(this)}
        ></FormAsset>
    </>


}