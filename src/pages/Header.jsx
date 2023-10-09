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
                <p>Carrito</p>
            </div>
        </div>
    )
}
