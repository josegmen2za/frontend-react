import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../Global';
import ImageDefault from '../assets/images/default.png';

class EstudiosRealizados extends Component {

    url = Global.url;

    state = {
        estudios: [],
        status: null
    }

    UNSAFE_componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;

        if (home === 'true') {
            this.getLastEstudios();

        } else if (search && search !== null && search !== undefined) {
            this.getEstudiosBySearch(search);
            console.log("llegan datos")

        } else {
            this.getEstudios();
            console.log(this.state);
            console.log("prueba")
        }

    }

    getEstudiosBySearch = (searched) => {
        axios.get(this.url + "estudios/search/" + searched)
            .then(res => {


                this.setState({
                    estudios: res.data.EstudiosRealizados,
                    status: 'success'
                });


            })
            .catch(err => {
                this.setState({
                    estudios: [],
                    status: 'success'
                });
                console.log(this.state);
                console.log("getEstudiosSearch");
            });
    }

    getLastEstudios = () => {
        axios.get(this.url + "estudios/last")
            .then(res => {

                this.setState({
                    estudios: res.data.EstudiosRealizados,
                    status: 'success'
                });
                console.log(this.state);
                console.log("getLastEstudios");
            });
    }

    getEstudios = () => {
        axios.get(this.url+"estudios")
            .then(res => {

                this.setState({
                    estudios: res.data.EstudiosRealizados,
                    status: 'success'
                });
                console.log(this.state);
                console.log("getEstudios");
            });
    }

    render() {
        if (this.state.estudios.length >= 1) {

            var listEstudios = this.state.estudios.map((estudio, index) => {
                return (
                    <div className="center upper-row">
                        <section >
                            <article className="article-item" id="article-template" key={estudio._id}>
                                <div className="image-wrap">
                                    {
                                        estudio.image !== null && estudio.image !== "" ? (
                                            <img src={estudio.image} alt={estudio.instituto} />
                                        ) : (
                                                <img src={ImageDefault} alt={estudio.instituto} />
                                            )


                                    }


                                </div>
                                <h2>{estudio.instituto}</h2>
                                <span className="date">
                                    {estudio.lugar}

                                </span>
                                <Link to={'estudio/'+estudio._id}>Leer mas</Link>
                                <div className="crearfix"></div>

                            </article>
                           
                        </section>
                        
                    </div>

                );
            });

            return (
                <div id="articles" >
                    {listEstudios}
                </div>
            );
        } else if (this.state.estudios.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles" >
                    <h1>No hay datos para mostrar</h1>
                </div>
            );
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando.......</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            );

        }

    }
}

export default EstudiosRealizados;