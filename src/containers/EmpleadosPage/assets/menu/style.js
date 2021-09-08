import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';

export const MenuBase = styled.ul`
      list-style: none;
      margin: 0;
      padding: 0;
      width: 200px;
      top: 37%;
      position: absolute;
`;

export const MenuBaseLi = styled.li`
      height: 40px;
      background-color: #404e56;
      color: #fff;
      padding-top: 17px;
      margin-bottom: 10px;
      cursor: pointer;
`;



export const useStyles = makeStyles((theme) => ({
    input:{
        width: '100%',
        marginBottom: '10px'
    }
}));





