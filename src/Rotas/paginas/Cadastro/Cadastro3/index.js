import './cd3.css'
import { Link } from 'react-router-dom';
import React, {Component} from "react";


class Cadastro3 extends Component{
    constructor(props){
        super(props);
        this.state = {
            mensagem: ""

        }

        this.verificar = this.verificar.bind(this);

    };

    verificar(value){
        if (value !=='undefined') {
            this.setState(this.rota);
            console.log(this.state.rota)
        } else if(value === 'undefined'){
            this.rota = "/CadastroPart2";
            this.setState(this.rota);
            console.log(this.state.rota)

            this.mensagem = "Voce precisa selecionar uma opção!";
            this.setState(this.mensagem);
            console.log(this.state.mensagem)
        
           
        }
    }



    render() {
        return (
            <div className='cd3-container'>
                <div className='cd3-content-left'></div>
                <div className='cd3-content-right'>
                    <form className="form"> 
                        <h1>Cadastro Universidade</h1>
                        <br/>

                        <h1>Escolha uma opção de conta:</h1>
                        <br/>

                        <label className="label-input"> 
                            <input type="radio" className="cd3" name="escolha" value="/CadastroEmpresa"  onChange={(e) => this.setState({rota: e.target.value})}/> Cadastrar uma Universidade
                        </label>
                        <br/>

                        <label className="label-input"> 
                            <input type="radio" className="cd3" name="escolha" value="/CadastroFuncionario"  onChange={(e) => this.setState({rota: e.target.value})}/> Cadastrar como Funcionário
                        </label>
                        <br/>
                        

                        <Link className="cd3-input-btn" onClick={this.verificar(this.state.rota)} to={this.state.rota}>Selecionar</Link>
                        <p>{this.state.mensagem}</p>

                    </form> 
                </div>
            </div>

        );
    }
}


export default Cadastro3;