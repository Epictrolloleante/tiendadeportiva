import React, { useState, useEffect } from 'react';
import Auth from './auth';
import Admin from './authAdmin'
import styles from '../css/Header.css';
import { Link } from 'react-router-dom';
export default function Header(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Usar null para indicar "cargando"
    const [isAdmin, setIsAdmin] = useState(null);

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
    useEffect(() => {
        Admin()
            .then((isAdmin) => {
                setIsAdmin(isAdmin);
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
                {isAdmin ? (props.Titulo !== 'Categorias' && <Link to={'/ComponenteAdminCategoria'}><p>Categorias</p></Link>) : (<></>)}
                {props.Titulo !== 'Home' && props.Titulo !== 'Inicio de sesion' && <Link to='/CarroDeCompras'><p>Carrito</p></Link>}
            </div>
        </div>
    )
}
