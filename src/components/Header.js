import React, { Component } from 'react';
import logo from '../assets/images/logoreact.svg'
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
                    {/*--Logo--*/}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="logotipo" />
                        <span id="brand">
                            <strong>Jose</strong>Men2za
                </span>
                    </div>
                    {/*--Menu--*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/inicio" activeClassName="active">Inicio</NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/datos/persona" activeClassName="active">Datos Personales</NavLink>
                            </li>
                            <li>
                                <NavLink to="/estudios" activeClassName="active">Estudios Realizados</NavLink>
                            </li>
                            <li>
                                <NavLink to="/experiencias" activeClassName="active">Experiencias Laborales</NavLink>
                            </li>
                            
                        </ul>
                    </nav>
                    {/*-- Limpiar los flotados --*/}
                    <div className="crearfix"></div>
                </div>

            </header>
        );
    }
}


export default Header;
