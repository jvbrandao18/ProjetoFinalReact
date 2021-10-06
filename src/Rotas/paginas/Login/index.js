import './login.css';
import React, { Component } from 'react';
import { MdEmail, MdLock } from "react-icons/md";
import firebase from '../../../Firebase';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuario: "",
            senha: "",
            mensagem: ""

        }

        this.logar = this.logar.bind(this);
    }

    async logar(){
        await firebase.auth().signInWithEmailAndPassword(this.state.usuario, this.state.senha)
        .then((value)=>{
            firebase.firestore().collection("usuario").doc(value.user.uid);
            window.open("/FeedPrincipal", "_self");

        })
        .catch((error)=>{
            this.setState({mensagem: "E-mail ou Senha inválidos! Tente Novamente!"});
        })

        console.log(this.state.usuario); 
    }

    render(){
        return (
            <div className="login">
                <div className="login-logo">
                    <img src="/logo.png" />
                </div>
    
                <div className="login-right">
                    <h1>Acessar App</h1>
    
                    <div className="login-loginInputEmail">
                        <MdEmail />
                        <input
                            type="text"
                            placeholder="Digite seu email"
                            onChange={(e)=> this.setState({usuario: e.target.value})}
                        />
                    </div>
    
                    <div className="login-loginInputPassword">
                        <MdLock />
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={(e)=> this.setState({senha: e.target.value})}
                        />
                    </div>
    
                    <button className="login-right-Link" onClick={this.logar}>
                        Entrar
                    </button>

                    <p> {this.state.mensagem} </p>
    
                    <h4>Não possui conta?</h4>
    
                    <button onClick={()=> window.open("/cadastro", "_self")}>
                        Cadastrar
                    </button>
    
    
                </div>
            </div>
        )

    }
    
}

export default Login