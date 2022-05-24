import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm'
import { registerAsync } from '../../redux/actions/loginActions'

const Register = () => {

  const dispatch = useDispatch()

  const [formValue, handleInputChange, rest] = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  const { name, email, password1, password2 } = formValue

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    dispatch(registerAsync(email, password1, name))
    rest()
  }
  return (
    <div>
      <h1>Register</h1>
      <div className="contenedor-registro">
        <form onSubmit={handleSubmit}>
          <div className="campos">
            <div className="campo1">
              <label>Nombre</label>
              <input type="text" name="name" value={name} onChange={handleInputChange} required />
            </div>
            <div className="campo2">
              <label>Correo electrónico</label>
              <input type="email" name="email" value={email} onChange={handleInputChange} required />
            </div>
            <div className="campo3">
              <label>Contraseña</label>
              <input type="password" name="password1" value={password1} onChange={handleInputChange} required minLength="6" />
            </div>
            <div className="campo4">
              <label>Repetir contraseña</label>
              <input type="password" name="password2" value={password2} onChange={handleInputChange} required minLength="6" />
            </div>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Register