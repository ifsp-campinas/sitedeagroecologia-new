import React from 'react';

import './Projetos.css';

import foto3 from '../../assets/images/TecnologiasSociais/icone.png';
const projetos = (props) =>{
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img className="card-img-top" src={props.foto} alt={""}></img>
                <div className="card-body texto">
                    <p className="card-text"><a href={props.link} style={{textDecoration: 'none', color: 'white'}}><img src={foto3} alt={"Icone_Casa"}></img> {props.titulo} </a></p>
                </div>
            </div>
        </div>
    )
}

export default projetos;