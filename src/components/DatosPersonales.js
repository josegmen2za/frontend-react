import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';

import Global from '../Global';
import ImageDefault from '../assets/images/default.png';

class DatosPersonales extends Component {

    url = Global.url;

    state = {
        datospersonales: [],
        status: null
    }

    UNSAFE_componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;

        if (home === 'true') {
            this.getLastDatosPersonales();

        } else if (search && search !== null && search !== undefined) {
            this.getDatosPersonalesBySearch(search);
            console.log("llegan datos")
            
        } else {
            this.getDatosPersonales();
            console.log(this.state);
            console.log("prueba")
        }

    }

    getDatosPersonalesBySearch = (searched) => {
        axios.get(this.url+"search/"+searched)
            .then(res => {

                
                    this.setState({
                        datospersonales: res.data.datospersonales,
                        status: 'success'
                    });
             

            })
            .catch( err => {
                 this.setState({
                        articles: [],
                        status: 'success'
                    });
            });
    }

    getLastDatosPersonales = () => {
        axios.get(this.url + "cvspersona/")
            .then(res => {

                this.setState({
                    datospersonales: res.data.datospersonales,
                    status: 'success'
                });
                console.log(this.state);
                console.log("Prueba3");
            });
    }

    getDatosPersonales = () => {
        axios.get(this.url + "cvspersona/")
            .then(res => {

                this.setState({
                    datospersonales: res.data.datospersonales,
                    status: 'success'
                });
                console.log(this.state);
                console.log("Prueba2");
            });
    }

    render() {
        if (this.state.datospersonales.length >= 1) {

            var listDatosPersonales = this.state.datospersonales.map((datospersonales, index) => {
                return (
                    <article className="article-item" id="article-template" key={datospersonales._id}>
                        <div className="image-wrap">
                            {
                                datospersonales.image !== null && datospersonales.image !== "" ? (
                                    <img src={this.url+'get-image/'+datospersonales.image} alt={datospersonales.title} />
                                ) : (
                                        <img src={ImageDefault} alt={datospersonales.title} />
                                    )


                            }


                        </div>
                        <h2>{datospersonales.title}</h2>
                        <span className="date">
                            <Moment locale="es" fromNow>{datospersonales.date}</Moment>

                        </span>
                        <Link to={'/datos/persona/' + datospersonales._id}>Leer mas</Link>
                        <div className="crearfix"></div>
                    </article>
                );
            });

            return (
                <div id="articles" >
                    {listDatosPersonales}
                </div>
            );
        } else if (this.state.datospersonales.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles" >
                    <h1>No hay Articulos para mostrar</h1>
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

export default DatosPersonales;