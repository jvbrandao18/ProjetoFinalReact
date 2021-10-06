import React, {Component} from "react";
import './cd2.css';
import { Link } from 'react-router-dom';



class Cadrasto2 extends Component{
    constructor(props){
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <div className='cd2-container'>
                <div className='cd2-content-left'></div>
                <div className='cd2-content-right'>
                    <form className="form"> 
                        <h1>Cadastrar Instituição</h1>
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
                            <label className='form-label'>CNPJ</label>
                            <input
                                className='form-input'
                                type='text'
                                name='cnpj'
                                placeholder='Digite a CNPJ'

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


export default Cadrasto2;