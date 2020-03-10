import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import swal from 'sweetalert';
import ImageDefault from '../assets/images/default.png';
//import Moment from 'react-moment';
import 'moment/locale/es';



class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    UNSAFE_componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = '5e6306a239bbee43307b6e37'

        axios.get(this.url + 'cvpersona/' + id)
            .then(res => {

                this.setState({
                    article: res.data.datospersonales,
                    status: 'success'
                });

            }).catch(err => {
                this.setState({
                    articles: false,
                    status: 'success'
                });
            });
        console.log(this.state);
    }

    deleteArticle = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            });
                        });
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }

    render() {


        if (this.state.status === 'deleted') {
            return <Redirect to="/blog"></Redirect>;

        }

        var article = this.state.article
        return (
            <div >
                <section id="content">
                    <h2 className="subheader">Datos Personales</h2>
                    {this.state.article &&








                        <div id="articles" >
                            <article className="article-item">
                                <div className="image-wrap">
                                    {
                                        article.image !== null && article.image !== "" ? (
                                            <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                        ) : (
                                                <img src={ImageDefault} alt={article.title} />
                                            )


                                    }
                                </div>
                                <div >
                                    <h2>Nombres y Apellidos: {article.nombres} {article.apellidos} </h2>
                                    <ul>Teléfono: {article.telefono} </ul>
                                    <ul>email: {article.email}</ul>
                                    <ul>Direccion: {article.direccion}</ul>
                                    <ul>Rut: {article.rut}</ul>
                                    <ul className="datospersonales">Conocimientos: {article.informacion} </ul>
                                    <ul className="datospersonales">Habilidades: {article.habilidades}</ul>
                                    <ul className="datospersonales">Actitudes: {article.actitudes}</ul>

                                </div>




                            </article>


                        </div>



                    }
                    {!this.state.article && this.state.status === 'success' &&
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

export default Article;