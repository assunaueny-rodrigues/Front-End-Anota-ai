import React from 'react';
import './styles.css';
import '../../styles-global/styles.css';
import LogoOrange from '../../assets/logo-orange.svg'
import Header from '../../components/header';

export default class OrderRegister extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <div className="card-order">   
                    <div className="card-header">
                        <h5>Adicionando novo pedido</h5>
                    </div>
                    <div className="card-body">
                        <h5>Nome do cliente:</h5>
                        <input></input>
                        <h5>Nome do pedido:</h5>
                        <input></input>
                        <h5>Descrição do produto:</h5>
                        <input></input>
                        <h5>Rua:</h5>
                        <input></input>
                        <h5>Bairro:</h5>
                        <input></input>
                        <h5>Número</h5>
                        <input></input>
                    </div>
                    <div className="card-footer">
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </div>
                </div>
            </div>
        )
    }
}