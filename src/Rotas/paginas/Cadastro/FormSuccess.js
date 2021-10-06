import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';


const FormSuccess = () => {
  return (
    <div className='cd2-container'>
        <div className='cd2-content-left'></div>

      <div className='form-content-right'>
        <h1 className='form-success'>Primeira parte do cadastro realizado com sucesso!</h1>
        <br/> 
        <h1 className='form-success'>Ir para segunda parte</h1>

          <form className='form' noValidate>
            <Link className="form-input-btn" to='/CadastroPart2'>Continuar o Cadastro</Link>
          </form>

      </div>
    </div>
  );
};

export default FormSuccess;
