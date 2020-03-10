import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';
import EstudiosRealizados from './/EstudiosRealizados';



class Estudios extends Component {
  

    render() {
        //var buttonString = "ver mas";

        return (
            <div id="blog">
                 
                <Slider
                    title="Estudios Realizados"
                    /* btn={buttonString} */
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos que vendran del api */}
                        <EstudiosRealizados />
                        
                    </div>
                    <Sidebar 
                        blog="false"
                    />
                </div>
                
            </div>
           
        );
    }
}

export default Estudios;