import React from 'react';
import ComponenteLayout from './ComponenteLayout';
import styles from '../css/MenuPrincipal.css';

export default function Productos() {
    return (
        <ComponenteLayout>
            <div className="col-md-6 mb-4">
                <div className="card">
                    <img src='src\img\menuprincipal\balon1.png' className="card-img-top" alt='a' />
                    <div className="card-body">
                        <h5 className="card-title">Balon</h5>
                        <p className="card-text">Balones bolonecos</p>
                        <p className="card-text">$180</p>
                    </div>
                </div>
            </div>
        </ComponenteLayout>
    )
}
