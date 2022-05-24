import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { loginGoogle } from '../../redux/actions/loginActions';
import FormLogin from './FormLogin';



const H1 = styled.h1`
    text-align: center;
`
const P = styled.p`
    text-align: center;
    padding: 1.5rem 0;
`
const ContenedorCentral = styled.div`
  display: flex;
  justify-content: center;
`

const Login = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div>

                <div className="inicia-sesion">
                    <P>Inicia sesión o regístrate para usar nuestros servicios</P>
                </div>
                <ContenedorCentral>
                    <button onClick={() => dispatch(loginGoogle())}>Sign in With Google</button>
                    <button >Sign in With Facebook</button>
                    <Link to="/register">Registrarse</Link>
                </ContenedorCentral>
                <ContenedorCentral>
                    <FormLogin />
                </ContenedorCentral>
            </div>
        </>
    )
}

export default Login