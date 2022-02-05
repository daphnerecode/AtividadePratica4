import '../../Components/SectionsDestinos/Cardmaior.css';
import Cardmaior from '../SectionsDestinos/Cardmaior';
import Praia6card from'../../Assets/Imagens/Praia6card.jpg';
import Praia7card from'../../Assets/Imagens/Praia7card.jpg';
import Praia8card from'../../Assets/Imagens/Praia8card.jpg';

function MainSectionPromo(){
    return(
        <div>
<Cardmaior nomedopacote="Resort Búzios de R$1500 por R$750! Não perca esta oportunidade!" foto={Praia6card} descricao1linha= "Aproveite Búzios com todo luxo e pompa. Além de 2 diárias em Cruzeiro pelas praias da Azeda e Azedinha." descricao2linha= "Desfrute de um passeio exclusivo pelas Ruas das Pedras, com acesso ao melhor da comida e da night da região." descricao3linha= "O pacote inclui descontos exclusivos junto às empresas parceiras da dtravels." descricao4linha= "Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$1.500. " > </Cardmaior>
<Cardmaior nomedopacote="Rio Adventures de R$2.600 por R$1.500! Agora é hora de viajar!" foto={Praia7card} descricao1linha= "O Rio de Janeiro como você nunca viu! Com vista para a Zona Sul da cidade." descricao2linha= "Dentro desse pacote oferecemos 5 diárias com todos os esportes marítimos: aulas de surf, bodyboarding, stand up paddle e kitesurf!" descricao3linha= "O pacote inclui aulas para você e sua família e as melhores praias no nosso roteiro." descricao4linha= "Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$2.600." > </Cardmaior>    
<Cardmaior nomedopacote="Ubatuba Mergulhos de R$4.000 por R$3.500! Nem os peixes perdem essa oportunidade ;) " foto={Praia8card} descricao1linha= "Mergulho é com a gente mesmo! Nesse pacote oferecemos 5 diárias no melhor hotel de Ubatuba na frenta da praia." descricao2linha= "Incluídas duas saídas de mergulho, com todo o equipamento e instrutor por nossa conta, além da prática de scuba diving à vontade. " descricao3linha= "O pacote inclui as praias mais paradisíacas, para você aproveitar tudo o que tem direito." descricao4linha= "Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$4.000." > </Cardmaior>
        </div>
    );
}
export default MainSectionPromo;