import '../../Components/SectionsHome/SectionsHome.css'
import 'materialize-css/dist/css/materialize.min.css';
import '../../Components/SectionsHome/Tabelaprecos.css'
import SegundaSection from './Segundasection';
import Tabelaprecos from './Tabelaprecos';
import Btnofertas from './Btnofertas';
import Quemsomos from './Quemsomos';

function SectionsHome (){
    return(
        <main>
        <div className="imagem_menu">
        </div>
        <div>
            <SegundaSection />
        </div>
        <div>
        <Tabelaprecos/>
        <Btnofertas/>
        </div>
        <div>
            <Quemsomos/>
        </div>
        </main>
    );
}
export default SectionsHome;
