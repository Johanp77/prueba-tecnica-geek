import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm'
import { loginAsync } from '../../redux/actions/loginActions'



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
                <h2>Inicia Sesión </h2>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" name="email" value={email} onChange={handleInputChange} required />
                </div>
                <div className="campo3">
                    <label>Contraseña</label>
                    <input type="password" name="password1" value={password1} onChange={handleInputChange} required minLength="6"/>
                </div>
                <button>Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default FormLogin