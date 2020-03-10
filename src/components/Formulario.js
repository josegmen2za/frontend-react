import React, { Component } from 'react';
import Sidebar from './Sidebar';



class Formulario extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generohombreRef = React.createRef();
    generomujerRef = React.createRef();
    generootroRef = React.createRef();

    state = {
        user: {}
    };

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'hombre';

        if (this.generohombreRef.current.checked) {
            genero = this.generohombreRef.current.value;
        } else if (this.generomujerRef.current.checked) {
            genero = this.generomujerRef.current.value;
        } else {
            genero = this.generootroRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero,
        }

        this.setState({
            user: user
        });



        console.log("Formulario enviado");
        console.log(user);
    }


    render() {
        
        if(this.state.user.nombre){
            var user = this.state.user;
        }

        return (
            <div id="formulario">

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>

                        {/* Mostrar Datos del formulario */}
                        {this.state.user.nombre &&
                            <div id="user-data">
                                <p>nombre: <strong>{user.nombre}</strong></p>
                                <p>nombre: <strong>{user.apellidos}</strong></p>
                                <p>nombre: <strong>{user.bio}</strong></p>
                                <p>nombre: <strong>{user.genero}</strong></p>
                            </div>

                        }

                        
                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombres:</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombre">Apellidos: </label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>
                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generohombreRef} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generomujerRef} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.generootroRef} /> Otro
                            </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>

                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>

            </div>
        );
    }
}

export default Formulario;