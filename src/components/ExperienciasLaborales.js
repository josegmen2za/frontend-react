import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../Global';
import ImageDefault from '../assets/images/default.png';

class ExperienciasLaborales extends Component {

    url = Global.url;

    state = {
        experiencias: [],
        status: null
    }

    UNSAFE_componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;

        if (home === 'true') {
            this.getLastExperiencias();

        } else if (search && search !== null && search !== undefined) {
            this.getExperienciasBySearch(search);
            console.log("llegan datos")

        } else {
            this.getExperiencias();
            console.log(this.state);
            console.log("prueba")
        }

    }

    getExperienciasBySearch = (searched) => {
        axios.get(this.url + "trabajos/search/" + searched)
            .then(res => {


                this.setState({
                    experiencias: res.data.TrabajosRealizados,
                    status: 'success'
                });


            })
            .catch(err => {
                this.setState({
                    experiencias: [],
                    status: 'success'
                });
                console.log(this.state);
                console.log("getExperienciasBySearch");
            });
    }

    getLastExperiencias = () => {
        axios.get(this.url + "trabajos/last")
            .then(res => {

                this.setState({
                    experiencias: res.data.TrabajosRealizados,
                    status: 'success'
                });
                console.log(this.state);
                console.log("getLastExperiencias");
            });
    }

    getExperiencias = () => {
        axios.get(this.url+"trabajos")
            .then(res => {

                this.setState({
                    experiencias: res.data.TrabajosRealizados,
                    status: 'success'
                });
                console.log(this.state);
                console.log("getExperiencias");
            });
    }

    render() {
        if (this.state.experiencias.length >= 1) {

            var listExperiencias = this.state.experiencias.map((experiencia, index) => {
                return (
                    <div className="center upper-row">
                        <section >
                            <article className="article-item" id="article-template" key={experiencia._id}>
                                <div className="image-wrap">
                                    {
                                        experiencia.image !== null && experiencia.image !== "" ? (
                                            <img src={experiencia.image} alt={experiencia.empresa} />
                                        ) : (
                                                <img src={ImageDefault} alt={experiencia.empresa} />
                                            )


                                    }


                                </div>
                                <h2>{experiencia.empresa}</h2>
                                <span className="date">
                                    {experiencia.cargo}

                                </span>
                                <Link to={'trabajo/'+experiencia._id}>Leer mas</Link>
                                <div className="crearfix"></div>
                                    
                            </article>
                           
                        </section>
                        
                    </div>

                );
            });

            return (
                <div id="articles" >
                    {listExperiencias}
                </div>
            );
        } else if (this.state.experiencias.length === 0 && this.state.status === 'success') {
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

export default ExperienciasLaborales;