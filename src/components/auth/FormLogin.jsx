import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm'
import { loginAsync } from '../../redux/actions/loginActions'
import styles from '../styles/AuthStyles.module.css';



const FormLogin = () => {
    const dispatch = useDispatch()

    const [formValue, handleInputChange, rest] = useForm({
        email: '',
        password1: ''
    })

    const { email, password1 } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(loginAsync(email, password1))
        rest()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.h2_login}>Inicia Sesión </h2>
                <div className={styles.inputs}>
                    <TextField
                        required
                        type="email"
                        id="outlined-required"
                        label="Email"
                        name="email"
                        value={email} onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputs}>
                <TextField
                        required
                        minLength="6"
                        type="password"
                        id="outlined-required"
                        label="Contraseña"
                        name="password1"
                        value={password1} onChange={handleInputChange}
                    />
                </div>
                <div className={styles.center_button_login}>
                <button className={styles.button_login}>Iniciar Sesión</button>
                </div>
            </form>
        </div>
    )
}

export default FormLogin