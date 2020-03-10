import React, { Component } from 'react';




class Skill extends Component {




    render() {


        return (
            <div>
                <section className="skills-section section">
                    <h2 className="section-title p-5 m-3"><span className="icon-holder"><i className="fa fa-rocket"></i></span>Habilidades &amp; competencia</h2>
                    <div className="skillset">
                        <div className="item">
                            <h3 className="level-title">Node.js</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 50 + '%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Javascript </h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 55 + '%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="item">
                            <h3 className="level-title">jQuery</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 40 + '%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Angular</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 70 + '%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="item">
                            <h3 className="level-title">React</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 58 + '%'}} aria-valuenow="58" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="item">
                            <h3 className="level-title">Vue js</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 40 + '%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="item">
                            <h3 className="level-title">HTML5 &amp; CSS3</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 75 + '%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Mongodb y Mysql</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 85 + '%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="item">
                            <h3 className="level-title">Photoshop</h3>
                            <div className="progress level-bar">
                                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>
                </section>


            </div>
        );
    }
}

export default Skill;