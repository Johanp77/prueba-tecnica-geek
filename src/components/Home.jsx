import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/loginActions'
import TableProducts from './TableProducts'
import styled from 'styled-components'
import styles from './styles/Home.module.css'
import CustomizedSnackbars from './AlertComp'



const Home = (props) => {
    const dispatch = useDispatch()

    return (
        console.log(props.value),
        <div>
            <div className="cabecera">
                <p className={styles.cabecera_p}>INGREDIENTES</p>
                <h1 className={styles.cabecera_title}>Risotto de setas(vegano)</h1>
                <span className={styles.cabecera_span}>Seleccionar todo</span> <span className={styles.cabecera_span}>|</span> <span className={styles.cabecera_span}>Deseleccionar todo</span>
            </div>
            <div className="contenedor-ingredientes">
                <TableProducts />
            </div>
            <div className="Resumen-factura">
                <p>Items: </p>
                <p>Subtotal</p>
                <p>Gastos de envío</p>
                <p>Total: {props.brand}</p>
                {/* <button className={styles.button_comprar} >Comprar Ingredientes</button> */}
            </div>
            <CustomizedSnackbars />
            <button onClick={() => dispatch(logoutAsync())}>Cerrar Sesión</button>

        </div>
    )
}

export default Home
