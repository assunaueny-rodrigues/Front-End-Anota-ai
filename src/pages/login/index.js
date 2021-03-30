import React from 'react';
import './styles.css';
import '../../styles-global/styles.css';
import LogoOrange from '../../assets/logo-orange.svg';

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
        this.login = this.login.bind(this)
    }

    login(){
        this.props.history.push('Home') 
    }

    render(){
        return(
            <div className="container">
                <div className="card-login">
                    <img style={{marginBottom: '10px'}} src={LogoOrange} alt="logo"></img>
                    <input placeholder="E-mail"></input>
                    <input placeholder='Senha'></input>
                    <button onClick={this.login} className="button-login">Entrar</button>
                </div>
            </div>
        )
    }
}