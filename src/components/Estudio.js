import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
//import swal from 'sweetalert';
import ImageDefault from '../assets/images/default.png';
import 'moment/locale/es';


class Estudio extends Component {

    url = Global.url;

    state = {
        estudio: false,
        status: null
    };

    UNSAFE_componentWillMount() {
        this.getEstudio();
    }

    getEstudio = () => {
        var id = this.props.match.params.id;
        console.log(id);
        axios.get(this.url+'estudio/'+id)
            .then(res => {

                this.setState({
                    estudio: res.data.EstudiosRealizados,
                    status: 'success'
                });

            }).catch(err => {
                this.setState({
                    estudios: false,
                    status: 'success'
                });
            });
            console.log(this.state);
    }



    render() {




        var estudio = this.state.estudio
        return (
            <div className="center">
                <section id="content">

                    {this.state.estudio &&


                        <article className="article-item " >

                            <div className="image-wrap">
                                {
                                    estudio.image !== null && estudio.image !== "" ? (
                                        <img src={estudio.image} alt={estudio.instituto} />
                                    ) : (
                                            <img src={ImageDefault} alt={estudio.instituto} />
                                        )


                                }
                            </div>
                            <h1 className="subheader">{estudio.instituto}</h1>
                            <span className="date">
                                {estudio.year}
                            </span>
                            <p>{estudio.lugar}</p>
                            <div className="center">
                            <p>{estudio.grado_obtenido}</p>
                            
                            <Link to={'/estudios'} className="btn btn-success ">Volver</Link>
                            </div>
                            <div className="crearfix"></div>

                        </article>

                    }
                    {!this.state.estudio && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El articulo no existe</h2>
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