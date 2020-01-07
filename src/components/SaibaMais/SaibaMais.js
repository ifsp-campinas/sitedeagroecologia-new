import React from 'react';
import foto2 from '../../assets/images/PN/foto2.png';

const saibaMais = (props) =>{
    return (
    <div className="row">
        <div className="col-md-2"/>
        <div className="col-md-8">
            <div className="card"> 
                <div className="card-body fundo_cinza">
                    <h4 className="card-title titulo3"><img src={foto2} alt={"Icone_Lâmpada"}></img> Saiba mais!</h4>
                    {props.conteudo}
                </div>
            </div>
        </div>
        <div className="col-md-2"/>
    </div>
    
    )
}

export default saibaMais;