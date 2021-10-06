import './Form.css';
import React, { Component } from 'react';



class FormSignup extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
    }

    this.validateInfo = this.validateInfo.bind(this);
  }

  validateInfo(username, email, password, password2) {
    let errosNome = "";
    let errosEmail = "";
    let errosSenha = "";
    let errosSenha2 = "";
    
    console.log("oi");

    
    if (username === "") {
      this.setState({errosNome: "É necessário um nome!"});
    }
  
    if (email === "") {
      this.setState({errosEmail: "É necessário um E-mail!"});
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      this.setState({errosEmail: "O endreço de E-mail é inválido!"});
    } else if (email === 'auth/email-already-in-use'){
      this.setState({errosEmail: "O E-mail já é existente!"});
    }
  
    if (password === "") {
      this.setState({errosSenha: "É necessário uma senha!"});
    } else if (password.length < 6) {
      this.setState({errosSenha: "A senha precisa ter 6 ou mais caracteres!"});
    }
  
    if (password2 === "") {
      this.setState({errosSenha2: "Repita a senha!"});
    } else if (password2 !== password) {
      this.setState({errosSenha2: "As senhas não são iguais!"});
    }

    if (this.errosNome === "" && this.errosEmail === "" && this.errosSenha === "" && this.errosSenha2 === ""){
      window.open("/FormSuccess", "_self");
    }
  }


  render(){
    return ( 
      <div className='form-container'>
        <div className='form-content-left'></div>

        <div className='form-content-right'>
          <form className='form'>
            <h1>
              Cadastro
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Nome</label>
              <input
                className='form-input'
                type='text'
                placeholder='Digite seu nome'
                onChange={(e)=> this.setState({username: e.target.value})}
              />
              {this.state.errosNome}
                
            </div>
            <div className='form-inputs'>
              <label className='form-label'>E-mail</label>
              <input
                className='form-input'
                type='email'
                placeholder='Entre com seu E-mail'
                onChange={(e)=> this.setState({email: e.target.value})}
              />
              {this.state.errosEmail}
              
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Senha</label>
              <input
                className='form-input'
                type='password'
                placeholder='Entre com sua senha'
                onChange={(e)=> this.setState({password: e.target.value})}
              />
              {this.state.errosSenha}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Confirmar Senha</label>
              <input
                className='form-input'
                type='password'
                placeholder='Confirme sua senha'
                onChange={(e)=> this.setState({password2: e.target.value})}
              />
              {this.state.errosSenha2}
            </div>

            <button className='form-input-btn' onClick={()=> {this.validateInfo(this.state.username, this.state.email, this.state.password, this.state.password2)}}>
              Cadastrar
            </button>

            <span className='form-input-login'>
              Você já tem uma conta? Login <a onClick={()=> window.open("/", "_self")}>aqui</a>
            </span>
          </form>
        </div>  
      </div>
    )
  }
}

export default FormSignup;
