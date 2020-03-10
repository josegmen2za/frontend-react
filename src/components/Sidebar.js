import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ImageProfile from '../assets/images/profile.png';


class Sidebar extends Component {

    searchRef = React.createRef();

    state = {
        search: "",
        redirect: false
    }

    redirectToSearch = (e) => {
        e.preventDefault();
       

        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });
    }

    render() {

        if(this.state.redirect){
            return(
                <Redirect to={'/redirect/'+this.state.search} />
            );
        }

        return (
            <aside  className="sidebar-wrapper">
                
            
            
            <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={ImageProfile} alt="" />
                <h1 className="name">Jose G. Mendoza</h1>
                <h3 className="tagline">Full Stack Developer</h3>
                
            </div>
            
            <div className="contact-container container-block justify-content-center">
                <ul className="list-unstyled contact-list">
                    <li className="email"><a href="mailto: josegmen2za@gmail.com"><i className="fa fa-envelope"></i></a></li>
                    <li className="phone"><a href="https://raw.githubusercontent.com/josegmen2za/backend-cv/master/upload/imagenes/contact_qr_my_code%5B2203%5D.png"><i className="fa fa-phone"></i></a></li>
                    <li className="website"><a href="https://men2za.000webhostapp.com/" target="blank"><i className="fa fa-globe"></i></a></li>
                    <li className="linkedin"><a href="https://www.linkedin.com/in/jose-gregorio-mendoza-rodriguez-608564135/" target="blank"> <i className="fa fa-linkedin"></i></a></li>
                    <li className="github"><a href="https://github.com/josegmen2za" target="blank"><i className="fa fa-github"></i></a></li>
                    <li className="twitter"><a href="https://www.twitter.com/josegmen2za/?hl=es-la" target="blank"> <i className="fa fa-twitter"></i></a></li>
                    <li className="instagram"><a href="https://www.instagram.com/josegmen2za/?hl=es-la" target="blank"><i className="fa fa-instagram"></i></a></li>
                </ul>
            </div>
            
            </div>
             
            </aside>
            
           
            
        );
    }
}

export default Sidebar;