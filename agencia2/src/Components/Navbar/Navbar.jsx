import '../../Components/Navbar/Navbar.css';
import Navbarlogos from '../Navbar/Navbarlogos';
import Logopranchaelema from '../../Assets/Imagens/Logopranchaelema.png';
import Logo7 from '../../Assets/Imagens/Logo7.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
<header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Navbarlogos foto={Logo7}> </Navbarlogos>
                                <Link to = "/">  <a> Home</a> </Link>
                                <Link to="/Destinos"><a>Destinos</a></Link>
                                <Link to="/Promocoes"> <a>Promoções</a></Link>
                                <Link to= "/Cadastroclientes"><a>Cadastro</a></Link>
                                <Link to= "/Reservas"><a> Reservas</a></Link>
                                <Link to= "/Contato"><a>Contato</a></Link>
                              <Navbarlogos foto={Logopranchaelema}> </Navbarlogos>
                            </div>
                        </div>
                    </div>
                </nav>  
               </header>   
    );
}
export default Navbar;
