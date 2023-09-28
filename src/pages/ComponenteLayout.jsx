// Layout.js

import React from 'react';
import styles from '../css/ComponenteLayout.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div id="principal">
      <Header id="barraMenu"/>
      <div className="container">
        <Sidebar id="lateral" />
        <main id="main">{children}</main>
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default Layout;