import '../../Components/SectionsHome/SectionsHome.css'
import Praia0card from '../../Assets/Imagens/Praia0card.jpg';
import Praia3card from '../../Assets/Imagens/Praia3card.jpg';
import Praia2card from '../../Assets/Imagens/Praia2card.jpg';
import Praia1card from'../../Assets/Imagens/Praia1card.jpg';
import Praia6card from'../../Assets/Imagens/Praia6card.jpg';

import Card from '../../Components/SectionsHome/Card';
import 'materialize-css/dist/css/materialize.min.css';

 function SegundaSection(props){
    return(
      <div className= "centralizadivs">
<div className = "divcards">
  <Card nomedacidade="Resort Ipioca(AL)" foto={Praia0card} texto="Bem vindo(a) à Maragogi, o Caribe brasileiro, um dos melhores destinos do Nordeste."></Card> 
  <Card nomedacidade="Resort Pipa (RN)" foto={Praia3card} texto="Uma das mais belas praias do país! Nosso pacote inclui tour gastronômico, passeios marítimos e transfers privados."></Card> 
  <Card nomedacidade="Ilha Grande (RJ)" foto={Praia2card} texto="Uma viagem para os amantes da natureza! Trilhas e aventuras, um pacote exclusivo de aulas de surf para toda a família."></Card> 
  <Card nomedacidade="Araruama(RJ)" foto={Praia1card} texto="Todos os esportes aquáticos que você possa imaginar dentro desse pacote. Você vai cansar de tanto mar ;)"></Card> 
</div>
 </div> 
    );
}
export default SegundaSection;
