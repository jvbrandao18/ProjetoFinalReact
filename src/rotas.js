import { BrowserRouter, Route, Switch} from "react-router-dom";


import Login from './Rotas/paginas/Login/index';
import NotFounds from './Rotas/paginas/NotFound/index';
import FormSignup from "./Rotas/paginas/Cadastro/FormSignup";
import FormSuccess from "./Rotas/paginas/Cadastro/FormSuccess";
import CadastroPart2 from "./Rotas/paginas/Cadastro/CadastroPart2";
import Cadrasto1 from "./Rotas/paginas/Cadastro/Cadastro1";
import Cadrasto2 from "./Rotas/paginas/Cadastro/Cadastro2";
import Cadrasto3 from "./Rotas/paginas/Cadastro/Cadastro3";
import CadastroFuncionario from "./Rotas/paginas/Cadastro/Cadastro3/funcionario";
import Principal1 from "./Rotas/paginas/principal/Menu";




const Rotas = () =>{
    return(

        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route exact={true} path="/cadastro" component={FormSignup}/>
                <Route exact={true} path="/FormSuccess" component={FormSuccess}/>
                <Route exact={true} path="/CadastroPart2" component={CadastroPart2}/>
                <Route exact={true} path="/CadastroEstudante" component={Cadrasto1}/>
                <Route exact={true} path="/CadastroEmpresa" component={Cadrasto2}/>
                <Route exact={true} path="/CadastroFaculdade" component={Cadrasto3}/>
                <Route exact={true} path="/CadastroFuncionario" component={CadastroFuncionario}/>
                <Route exact={true} path="/FeedPrincipal" component={Principal1}/>

                <Route exact={true} component={NotFounds}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;