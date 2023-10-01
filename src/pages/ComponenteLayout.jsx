// Layout.js

import React from 'react';
import styles from '../css/ComponenteLayout.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout(props) {
  return (
    <div id="principal">
      <Header id="barraMenu" Titulo={props.Titulo}/>
      <div className="container">
        <Sidebar id="lateral" />
        <main id="main">{props.children}</main>
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default Layout;