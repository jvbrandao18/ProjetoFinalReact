import React, {Component} from "react";
import './Menu.css';
import { FaUserEdit, FaUserFriends } from "react-icons/fa";
import { UilHistory } from '@iconscout/react-unicons';
import { UilCommentPlus } from '@iconscout/react-unicons';
import { UilSignout } from '@iconscout/react-unicons';
// import { UilUser } from '@iconscout/react-unicons';



class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome:"Muller A safada"
        }

    }

    render(){
        return(
            
            <div className="menu-geral">
        {/*==================== Menu da Esquerda (amigos) ==================== */}
                <div className="menu-left">
                    <div className="containerbutton">
                        <div className="btn">
                            <div className="left">
                                <a className="button--flex-left">
                                    Amigos<FaUserFriends className="button__icon-left"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        {/*==================== Menu da Central (Feed) ==================== */}

                <div className="menu-center">
                    corno
                </div>

        {/*==================== Menu da Direita (opções) ==================== */}

                <div className="menu-right">
                    <div className="FotoPerfil"><a className="iconPerfil">Foto</a></div>
                    <p className="nomeUsuario">{this.state.nome}</p>
                    
                    <div className="containerbutton">
                        <div className="btn">
                            <a className="button--flex">
                                Editar Perfil<FaUserEdit className="button__icon"/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="containerbutton">
                        <div className="btn">
                            <a className="button--flex">
                                Histórico<UilHistory className="button__icon"/>
                            </a>
                        </div>
                    </div>

                    <div className="containerbutton">
                        <div className="btn">
                            <a className="button--flex">
                                Publicar<UilCommentPlus className="button__icon"/>
                            </a>
                        </div>
                    </div>

                    <div className="containerbutton">
                        <div className="btn">
                            <a className="button--flex">
                                Sair <UilSignout className="button__icon"/>
                            </a>
                        </div>
                    </div>                    
                </div>
            </div>

        )
    }
}

export default Menu;
