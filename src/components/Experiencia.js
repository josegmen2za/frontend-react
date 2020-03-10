import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
//import swal from 'sweetalert';
import ImageDefault from '../assets/images/default.png';
//import Moment from 'react-moment';
import 'moment/locale/es';


class Estudio extends Component {

    url = Global.url;

    state = {
        experiencia: false,
        status: null
    };

    UNSAFE_componentWillMount() {
        this.getExperiencia();
    }

    getExperiencia = () => {
        var id = this.props.match.params.id;
        console.log(id);
        axios.get(this.url+'trabajo/'+id)
            .then(res => {

                this.setState({
                    experiencia: res.data.trabajorealizados,
                    status: 'success'
                });

            }).catch(err => {
                this.setState({
                    experiencia: false,
                    status: 'success'
                });
            });
            console.log(this.state);
    }

   

    render() {




        var experiencia = this.state.experiencia
        return (
            <div className="center">
                <section id="content">

                    {this.state.experiencia &&


                        <article className="article-item " >

                            <div className="image-wrap">
                                {
                                    experiencia.image !== null && experiencia.image !== "" ? (
                                        <img src={experiencia.image} alt={experiencia.empresa} />
                                    ) : (
                                            <img src={ImageDefault} alt={experiencia.empresa} />
                                        )


                                }
                            </div>
                            <h1 className="subheader">Empresa: {experiencia.empresa}</h1>
                            <h3 className="">Cargo :{experiencia.cargo}</h3>
                            <span className="date">Duracion:  {experiencia.duracion}</span>
                            <p> Jefe: {experiencia.jefe}</p>
                            <p> Telefono: {experiencia.telefono}</p>
                            <p>Funciones: {experiencia.responsabilidad}</p>
                            <p> Logros: {experiencia.logros}</p>
                            
                            
                            <Link to={'/experiencias'} className="btn btn-success ">Volver</Link>
                            <div className="crearfix"></div>

                        </article>

                    }
                    {!this.state.experiencia && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El Dato no existe</h2>
                            <p>Intenta de nuevo</p>
                        </div>

                    }

                    {this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando....</h2>
                            <p>Espere unos segundos</p>
                        </div>

                    }

                </section>

                <Sidebar />

            </div>

        );
    }
}

export default Estudio;