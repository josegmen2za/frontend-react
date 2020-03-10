import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import ExperienciasLaborales from './ExperienciasLaborales';



class Blog extends Component {
  

    render() {
        //var buttonString = "ver mas";

        return (
            <div id="blog">
                 
                <Slider
                    title="Experiencias Laborales"
                    /* btn={buttonString} */
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos que vendran del api */}
                        <ExperienciasLaborales />
                        
                    </div>
                    <Sidebar 
                        blog="false"
                    />
                </div>
                
            </div>
           
        );
    }
}

export default Blog;