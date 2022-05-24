import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/loginActions'
import TableProducts from './TableProducts'

const Home = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <div className="cabecera">
            <p>INGREDIENTES</p>
            <h1>Nombre del plato</h1>
            <span>Seleccionar todo</span> <span>|</span> <span>Deseleccionar todo</span>
        </div>
        <div className="contenedor-ingredientes">
            <TableProducts/>
        </div>
        <div className="Resumen-factura">
            <p>Items:</p>
            <p>Subtotal</p>
            <p>Gastos de envío</p>
            <p>Total:</p>
            <button>Comprar Ingredientes: </button>
        </div>
        <button onClick={() =>dispatch(logoutAsync())}>Cerrar Sesión</button>

    </div>
  )
}

export default Home