import '../SectionsHome/Btnofertas.css';
import { Link } from 'react-router-dom';

function Btnofertas() {
    return (
        <div className="divbotao">
            <Link to="/Promocoes"><a class="waves-effect waves-light btn-large"> Ofertas Excusivas!</a></Link>
        </div>
    );
}

export default Btnofertas;