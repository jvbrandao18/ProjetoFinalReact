import './CadastroPart2.css'
import React, {Component} from "react";
import { Link } from "react-router-dom";

class CadastroPart2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            mensagem: ""

        }

        this.verificar = this.verificar.bind(this);
        

    };


    verificar(value){
        console.log(value)
        if (value !== "") {
            console.log("certo");
        } else if(value === ""){
            this.setState({mensagem: "Voce precisa selecionar uma opção!"});
            console.log("errado");
        }

    }

    render(){
        return (
            <div className='cdpt2-container'>
                <div className='cdpt2-content-left'></div>
                <div className='cdpt2-content-right'>
                     
                        <form className="form">
                            <h1>Parte 2 - Cadastro!</h1>
                            <br/>

                            <h1>Escolha uma opção de conta:</h1>
                            <br/> 
                            <label className="label-input"> 
                                <input type="radio" className="cdpt2" name="escolha" value="/CadastroEstudante" onChange={(e) => this.setState({rota: e.target.value})}/> Estudante
                            </label>
                            <br/>

                            <label className="label-input"> 
                                <input type="radio" className="cdpt2" name="escolha" value="/CadastroEmpresa"  onChange={(e) => this.setState({rota: e.target.value})}/> Empresa
                            </label>
                            <br/>
                            
                            <label className="label-input"> 
                                <input type="radio" className="cdpt2" name="escolha" value="/CadastroFaculdade" onChange={(e) => this.setState({rota: e.target.value})}/> Faculdade
                            </label>
                            <br/>
                        </form>

                        <Link className="cdpt2-input-btn" onClick={this.verificar(this.state.rota)} to={this.state.rota}>Selecionar</Link>
                        <p>{this.state.mensagem}</p>

                   
                </div>
            </div>

        );
    }
}


export default CadastroPart2;