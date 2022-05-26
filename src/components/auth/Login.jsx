import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { loginGoogle } from '../../redux/actions/loginActions';
import FormLogin from './FormLogin';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from '../styles/AuthStyles.module.css';

const H1 = styled.h1`
    text-align: center;
`
const P = styled.p`
    text-align: center;
    padding: 1.5rem 0;
`


const Login = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div>

                <div className="inicia-sesion">
                    <H1>Inicia sesión o regístrate para usar nuestros servicios</H1>
                </div>
                <div className={styles.container_login}>
                    <FormLogin />
                </div >
                <div className={styles.container_register_login}>
                    <h3> ¿No tienes cuenta? </h3> <Link to="/register" > Registrate aquí</Link>
                </div>
                <div className={styles.container_social}>
                    <h3>Inicia sesión con tus redes sociales!</h3>
                    <GoogleIcon sx={{cursor: 'pointer'}} fontSize="large" onClick={() => dispatch(loginGoogle())}/>
                    <FacebookIcon sx={{cursor: 'pointer'}} fontSize="large" />
                </div>
            </div>
        </>
    )
}

export default Login