import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1400px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

export const FormWrapper = styled.section`
    width: 65%;
    min-height: 400px;
    height: 500px;
    color: red;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 9px;
`;

export const Form = styled.div`
    background-color: #54101b;
    width: 100%;
    height: 100%;
    padding: 35px;
    border-radius: 9px 0px 0px 9px;
    
    @media ${device.laptop} { 
        height: 100px;
    }
`;

export const Title= styled.h1`
    color:#fff;
    font-size: 45px;
    font-weight: bold;
    line-height: 0.9;
    margin-top:70px;
    word-break: break-word;
`;

export const Parrafo = styled.p`
    background-color: #54101b;
    width: 100%;
    height: 100px;
    font-size: 18px;
    color:#e6d6bd;
    margin-top:20px;
    line-height: 0.9;
    word-break: break-word;
`;

export const TextLogin = styled.div`
    color: #54101b;
    font-size: 30px;
    margin: 28px 0px 0px 44px;
    border-bottom: 1px solid #4748484d;
    width: 100%;
`;

export const ForgetMyPassword = styled.div`
    color: #54101b;
    text-decoration: underline;
    font-size: 13px;
    margin: -30px -1px 0 0;
    cursor: pointer;
`;


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
    input: {
        display: 'block',
        borderRadius: '5px',
        fontSize: '16px',
        background: 'white',
        width: '100%',
        border: '0',
        padding: '10px 10px',
        margin:' 15px -10px'
    },
    buttonLogin:{
        cursor: 'pointer',
        color: '#fff',
        fontSize: '16px',
        textTransform: 'uppercase',
        width: '80px',
        border: '0',
        padding: '10px 0',
        marginTop: '10px',
        marginLeft: '-5px',
        borderRadius:' 5px',
        backgroundColor: 'rgba(244, 91, 105, 1)'
    }


}));





