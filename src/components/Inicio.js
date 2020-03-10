import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Skill from './Skill';



class Inicio extends Component {




    render() {

        var intro = "Técnico Superior en Informática con experiencia en desarrollo de aplicaciones en Visual Studio.net, desarrollador frontend en Angular, React, javascript, Vuejs node.js typescript, HTML5, CSS3, Backend con javascript, administración de bases de datos SQL Server y Mysql, Mongodb, instalación de software, instalación y configuración de redes alámbricas y wifi, instalación y configuración de servidores, web, proxy, ftp, de Bases de Datos en Linux y Windows, Proactivo, dinámico, con alto interés en aprender y adquirir nuevos conocimientos, con nivel del idioma inglés medio.'"
        var buttonString = "Conocimientos";
        return (
            <div id="home "  >
                <Slider
                    title="Bienvenidos a mi sitio web en React"
                    btn={buttonString}
                    size="slider-big"
                />
                <div className="center ">
                    <div id="content" >

                        <section  >
                            <h1 className="subheader">Información General</h1>
                            <p className="datospersonales">{intro}</p>
                            <h2 className="subheader">Backend utilizado en este proyecto</h2>
                            <li className="website"><i className="fa fa-globe"></i><a href="https://backend-cv.herokuapp.com/api/trabajos" target="blank"> Api 1</a></li>

                            <li className="website"><i className="fa fa-globe"></i><a href="https://backend-cv.herokuapp.com/api/estudios" target="blank">  Api 2</a></li>

                            <li className="website"><i className="fa fa-globe"></i><a href="https://backend-cv.herokuapp.com/api/cvspersona" target="blank">  Api 3</a></li>

                            
                        </section>
                        <Skill/>
                    </div>
                    
                </div>
                <Sidebar />
            </div>
        );
    }
}

export default Inicio;