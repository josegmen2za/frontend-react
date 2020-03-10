import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';

import Inicio from './components/Inicio';
import DatosPersonales from './components/DatosPersonales';
import Persona from './components/Persona';
import Conocimientos from './components/Conocimientos';
import Estudios from './components/Estudios';
import Estudio from './components/Estudio';
import Experiencias from './components/Experiencias'
import Experiencia from './components/Experiencia'

class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                <Header />



                {/* confidurar rutas y paginas */}
                <Switch>

                    <Route exact path="/" component={Inicio} />
                    
                    <Route exact path="/inicio" component={Inicio} />
                    <Route exact path="/datos" component={DatosPersonales} />
                    <Route exact path="/datos/persona/" component={Persona} />
                    <Route exact path="/estudios" component={Estudios} />
                    <Route exact path="/estudio/:id" component={Estudio} />
                    <Route exact path="/experiencias" component={Experiencias} />
                    <Route exact path="/trabajo/:id" component={Experiencia} />
                   
                    <Route exact path="/conocimientos" component={Conocimientos} />
                    
                    
                    

                    

                    

                    <Route component={Error} />
                </Switch>

                <div className="clearfix"></div>

                <Footer />
            </BrowserRouter>

        );
    }
}

export default Router;