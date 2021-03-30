import React from 'react';
import './styles.css';
import '../../styles-global/styles.css';
import LogoDark from '../../assets/logo-dark.svg';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{

    render(){
        return(
            <div className="container-header">
                <div className="header-left">
                    <img width="130px" src={LogoDark} alt="logo"></img>
                </div>
                <div className="header-right">
                    <a>INÍCIO</a>
                    <span style={{color: 'white'}}>|</span>
                    <a>NOVO PEDIDO</a>
                    <span style={{color: 'white'}}>|</span>
                    <Link to="/">SAIR</Link>
                </div>
            </div>
        )
    }

}