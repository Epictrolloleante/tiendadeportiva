import React, { useState, useEffect } from 'react';
import Auth from './Auth.jsx';
import styles from '../css/Header.css';
import { Link } from 'react-router-dom';
export default function Header(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Usar null para indicar "cargando"

    useEffect(() => {
        Auth()
            .then((isAuthenticated) => {
                setIsAuthenticated(isAuthenticated);
            })
            .catch((error) => {
                console.log('Error en la solicitud:', error);
                setIsAuthenticated(false);
            });
    }, []);



    return (
        <div class="menu">
            <p>{props.Titulo}</p>
            <div class="opc-menu">
                <Link to={"/"}><p>Inicio</p></Link>
                {isAuthenticated ? (
                    <Link to={'/Logout'}><p>Logout</p></Link>) : (
                    props.Titulo !== 'Registro' &&
                    <div><Link to={'/Registro'}><p>Registro</p></Link></div>
                )}
                {isAuthenticated ? (<></>) : (
                    props.Titulo !== 'Inicio de sesion' &&
                    <div><Link to={'/Login'}><p>Login</p></Link></div>
                )}
                {props.Titulo !== 'Home' && props.Titulo !== 'Inicio de sesion' && <Link to="/Carrito"><p>Carrito</p></Link>}
            </div>
        </div>
    )
}
