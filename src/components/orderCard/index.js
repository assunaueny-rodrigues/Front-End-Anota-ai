import React from 'react';
import './styles.css';
import '../../styles-global/styles.css';
import UpdateIcon from '../../assets/update-icon.svg';
import DeleteIcon from '../../assets/delete-icon.svg';

export default class OrderCard extends React.Component{

    render(){
        return(
            <div className="order-card">
                <div style={{textAlign: "center"}}>
                    <h1>X-TUDO</h1>
                </div>
                <div className="content-data-card-order">
                    <label>CLIENTE:</label>
                    <h4>JOÂO BATISTA</h4>
                    <label>DESCRIÇÃO DO PEDIDO:</label>
                    <h4>SEM VERDURAS</h4>
                    <label>ENDEREÇO DE ENTREGA:</label>
                    <h4>RUA JOÃO OTÁVIO N° 22 - CENTRO</h4>
                </div>
                <div style={{textAlign: 'right', paddingRight: '10px', paddingBottom: '5px'}}>
                    <button className="button-icon-order-card">
                        <img style={{width: '30px'}} src={UpdateIcon}></img>
                    </button>
                    <button className="button-icon-order-card">
                        <img style={{width: '30px', paddingBottom: '2px', marginLeft: '3px'}} src={DeleteIcon}></img>
                    </button>
                </div>
            </div>
        )
    }

}