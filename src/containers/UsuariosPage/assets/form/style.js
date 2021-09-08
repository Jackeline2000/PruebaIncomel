import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    login: {
        overflow: 'hidden',
        backgroundColor: 'white',
        padding: '40px 30px 30px 30px',
        borderRadius: '10px',
        position: 'absolute',
        top: '35%',
        left: '35%',
        width: '400px',
        boxShadow:' 5px 10px 10px rgba($greenSeaweed, 0.2)'
    },
    input:{
        width: '100%',
        marginBottom: '10px'
    }
}));




