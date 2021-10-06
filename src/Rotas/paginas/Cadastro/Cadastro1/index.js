import React, {Component} from "react";
import './cd1.css';
import { Link } from 'react-router-dom';



class Cadrasto1 extends Component{
    constructor(props){
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <div className='cd1-container'>
                <div className='cd1-content-left'></div>
                <div className='cd1-content-right'>
                    <form className="form"> 
                        <h1>Cadastro Estudante</h1>
                        <br/>

                        <div className='form-inputs'>
                            <label className='form-label'>CPF</label>
                            <input
                                className='form-input'
                                type='text'
                                name='cpf'
                                placeholder='Digite seu CPF'

                            />
                            
                        </div>

                        
                        <div className='form-inputs'>
                            <label className='form-label'>Matrícula</label>
                            <input
                                className='form-input'
                                type='text'
                                name='matricula'
                                placeholder='Digite sua Matrícula'

                            />
                            
                        </div>
                        

                        <div className='form-inputs'>
                            <label className='form-label'>Selecione sua Universidade</label>
                                <select className='form-input'>
                                    <option>
                                        Escolha uma opção.
                                    </option>
                                    <option>
                                        PUCPR - Pontifícia Universidade Católica do Paraná.
                                    </option> 
                                    <option>
                                        UniCuritiba.
                                    </option>
                                    <option>
                                        UTFPR — Universidade Tecnológica Federal do Paraná UTFPR.
                                    </option>
                                    <option>
                                        UFPR — Universidade Federal do Paraná.
                                    </option>
                                </select>
                            
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>CEP</label>
                            <input
                                className='form-input'
                                type='text'
                                name='cep'
                                placeholder='Digite seu CEP'

                            />
                            
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Selecione seu Interesse</label>
                                <select className='form-input'>
                                    <option>
                                        Escolha uma opção.
                                    </option>
                                    <option>
                                        Engenharia.
                                    </option> 
                                    <option>
                                        Computação.
                                    </option>
                                    <option>
                                        Biologia.
                                    </option>
                                    <option>
                                        Saúde.
                                    </option>
                                </select>
                        </div>

                        <br/>

                        <Link className="form-input-btn" to='/'>Finalizar</Link>

                    </form>
                </div>
            </div>

        );
    }
}


export default Cadrasto1;