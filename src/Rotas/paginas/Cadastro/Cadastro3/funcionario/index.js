import React, {Component} from "react";
import './cd31.css';
import { Link } from 'react-router-dom';



class Cadrasto31 extends Component{
    constructor(props){
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <div className='cd31-container'>
                <div className='cd31-content-left'></div>
                <div className='cd31-content-right'>
                    <form className="form"> 
                        <h1>Cadastrar Funcionário</h1>
                        <br/>

                        <div className='form-inputs'>
                            <label className='form-label'>Nome</label>
                            <input
                                className='form-input'
                                type='text'
                                name='nomeEmpresa'
                                placeholder='Digite seu Nome'

                            />
                            
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Sobrenome</label>
                            <input
                                className='form-input'
                                type='text'
                                name='sobrenome'
                                placeholder='Digite seu Sobrenome'

                            />
                            
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>CPF</label>
                            <input
                                className='form-input'
                                type='text'
                                name='cpf'
                                placeholder='Digite a CPF'

                            />
                            
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Cargo / Função</label>
                            <input
                                className='form-input'
                                type='text'
                                name='cargoefuncao'
                                placeholder='Digite sua função/cargo na Instituição'

                            />
                            
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Nome da Instituição</label>
                            <input
                                className='form-input'
                                type='text'
                                name='nomeInsti'
                                placeholder='Digite o nome da Instituição em que você atua'

                            />
                            
                        </div>
                        

                        <br/>

                        <Link className="form-input-btn" to='/'>Finalizar</Link>

                    </form>
                </div>
            </div>

        );
    }
}


export default Cadrasto31;