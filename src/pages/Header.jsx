import React from 'react'
import styles from '../css/Header.css';
import { Link } from 'react-router-dom';
export default function Header(props) {
    return (
        <div class="menu">
            <p>{props.Titulo}</p>
            <div class="opc-menu">
                <Link to={"/"}><p>Inicio</p></Link>
                <Link to={'/Registro'}><p>Registro</p></Link>
                {props.Titulo !== 'Inicio de sesion' && <Link to={'/login'}><p>Inicio de Sesión</p></Link>}
                {props.Titulo !== 'Home' && <Link to="/Carrito"><p>Carrito</p></Link>}
            </div>
        </div>
    )
}
