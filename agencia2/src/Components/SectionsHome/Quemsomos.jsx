import Amigos from '../../Assets/Imagens/Amigos.jpg';
import '../../Components/SectionsHome/Quemsomos.css'

function Quemsomos() {
    return (
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s2">
                        <img src={Amigos} alt="" className="circle responsive-img" />
                    </div>
                    <div className="col s10">
                        <span className="black-text">
                            <h3> Quem somos </h3>
                            <hr />
                            <h6>Somos uma agência de turismo criada por surfistas profissionais voltada para o segmento praiano,</h6>
                            <h6>repleta de good vibes e sediada no Rio de Janeiro!</h6>
                            <h6> Somos obcecados pelos detalhes para que você não precise pensar em nada ;) </h6>
                            <h6> Apenas relaxar e aproveitar o sol e a água fresca.</h6>
                            <h6> Dito isso, prepare as malas e pé na estrada. </h6>
                            <h6> Aloha!</h6>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Quemsomos;
