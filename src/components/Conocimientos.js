import React, { Component } from 'react';
import {  Link } from 'react-router-dom';


import Sidebar from './Sidebar';


import 'moment/locale/es';


class Article extends Component {



    render() {



        return (
            <div id="articles">
               <section id="content">
                <div className="container-fluid d-flex flex-column justify-content-center h-100 align-items-center pt-5 fondo-2 pb-5">
                    <div className="pt-5 justify-content-center">
                        <h1 className="pt-5 text-center">Habilidades y Destresas</h1>
                        <ul className="text-left">

                            <li>Desarrollo de Aplicaciones en Visual Basic 6, Visual.net.</li>
                            <li>Frontend en Angular, React, Vue js,node.js, typescript y HTML5 y CSS3</li>
                            <li>Backend con javascript.</li>
                            <li>Diseño de Bases de Datos en SQL Server, Mysql, Mongodb</li>
                            <li>Instalación y administración de servidores Sql Server Mysql, Instalación de Servidores Web Apache. Con php y Servidor Ftp para Intranet.</li>
                            <li>Instalacion de servidores de Windows y de Linux.</li>
                            <li>Mantenimiento y administración de Páginas Web con Wordpress y Joomla (Gestor de Contenidos para páginas Web).</li>
                            <li>Mantenimiento de equipos de computación e instalación de hardware externos para Pc. Instalación de Cliente de Antivirus.</li>
                            <li>Instalación de Puntos de Red y Cableado Estructurado y fibra optica, Instalaciones de Cableados Eléctrico de Baja Tensión (corriente débil). instalación y configuración de redes alámbricas y wifi, instalación de redes de fibra óptica</li>
                            <li>Idiomas: español (Nativo), inglés (Técnico).</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <Link to={'inicio/'} class="btn btn-danger " >Volver</Link>
                        
                    </div>
                    
                  
                </div>
                
                </section> 


<div className="crearfix"></div><Sidebar />
            </div>

        );
    }
}

export default Article;