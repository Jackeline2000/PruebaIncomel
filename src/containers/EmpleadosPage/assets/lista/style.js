import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';

export const CuadroLista = styled.div`
    width: 1000px;
    height: 500px;
    background-color: aliceblue;
    border: 2px solid #000;
    margin: 20px auto;
`;

export const TituloLista = styled.h1`
    color: #000;
`;

export const ColumnaListaBase = styled.ul`
      list-style: none;
      width: 100%;
      margin: 0;
      padding: 0;
      border-bottom: 2px solid #000;
      height: 60px;
  
`;

export const ColumnaLista = styled.li`
      float: left;
      width: 25%;
      height: 40px;
      background-color: #6a6060;
      color: #fff;
      padding-top: 20px;
`;

export const FilaListaBase = styled.ul`
      list-style: none;
      width: 100%;
      margin: 0;
      padding: 0;
      border-bottom: 2px solid #000;
      height: 60px;
  
`;

export const FilaLista = styled.li`
      float: left;
      width: 25%;
      height: 40px;
      background-color: #fcfcfc;
      color: #000;
      padding-top: 20px;
`;


export const useStyles = makeStyles((theme) => ({
    buttonLogin:{
        cursor: 'pointer',
        color: '#000',
        fontSize: '16px',
        textTransform: 'uppercase',
        width: '80px',
        border: '0',
        padding: '10px 0',
        marginTop: '10px',
        marginLeft: '800px',
        borderRadius:' 5px',
        backgroundColor: '#00bcd4'
    },
    input:{
        width: '100%',
        marginBottom: '10px'
    }


}));





