import React from 'react';
import './styles.css';
import '../../styles-global/styles.css';
import LogoOrange from '../../assets/logo-orange.svg'
import Header from '../../components/header';
import ptLocale from "date-fns/locale/pt-BR";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import OrderCard from '../../components/orderCard';
import {withRouter} from 'react-router-dom';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="container-home">
                    <div className="container-date">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                            <DatePicker
                                label="Data selecionada"
                                animateYearScrolling
                            />
                        </MuiPickersUtilsProvider>                        
                    </div>
                    <div className="container-tittle">
                        <h2 style={{color:'#a5b1c2'}}>Lista de pedidos</h2>
                    </div>
                    <div className="container-list-card">
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
