import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/loginActions'

const Home = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Home</h1>
        <div className="cabecera">
            
        </div>
        <button onClick={() =>dispatch(logoutAsync())}>Cerrar Sesión</button>

    </div>
  )
}

export default Home