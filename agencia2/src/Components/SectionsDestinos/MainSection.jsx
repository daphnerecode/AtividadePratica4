import '../../Components/SectionsDestinos/Cardmaior.css';
import Cardmaior from '../../Components/SectionsDestinos/Cardmaior';
import Praia0card from'../../Assets/Imagens/Praia0card.jpg';
import Praia1card from'../../Assets/Imagens/Praia1card.jpg';
import Praia2card from'../../Assets/Imagens/Praia2card.jpg';
import Praia3card from'../../Assets/Imagens/Praia3card.jpg';
import Praia4card from'../../Assets/Imagens/Praia4card.jpg';
import Praia5card from'../../Assets/Imagens/Praia5card.jpg';

function MainSection(){
    return(
        <div>
            <Cardmaior nomedopacote="Araruama Adventures (RJ)" foto={Praia0card} descricao1linha= "Aproveite Araruama com todo arsenal de aventuras que esse lugar incrível pode te oferecer!"descricao2linha= "Dentro desse pacote oferecemos 5 diárias com todos os esportes marítimos: aulas de surf, bodyboarding, stand up paddle e kitesurf!"descricao3linha= "O pacote inclui aulas para você e sua família e as melhores praias no nosso roteiro."descricao4linha= "Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$4.000. "> </Cardmaior>
            <Cardmaior  nomedopacote="Ecoturismo na Barra(RJ)" foto={Praia1card} descricao1linha= "A Barrinha continua sendo o point fundamental da prática do kitesurf!" descricao2linha= "Nesse pacote temos 3 diárias no melhor hotel da Barra, à beira da praia, incluindo Trilhas no Morro da Pedra Branca e Telégrafo!" descricao3linha= "Estão incluídas aulas de kitesurf e passeios de barco pela Ilha da Gigóia que dá acesso aos melhores restaurantes da cidade." descricao4linha= "Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$1.000. "> </Cardmaior>
            <Cardmaior nomedopacote="Delícias de Florianópolis" foto={Praia2card} descricao1linha= "As praias paradisíacas de Floripa e a night da cidade!" descricao2linha= "Oferecemos tour pelas praias da região, além de todo o transporte." descricao3linha= "Estão incluídos passeios de saveiro pelas praias vizinhas." descricao4linha= "Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$5.000. "> </Cardmaior>
            <Cardmaior nomedopacote="Resort Búzios"  foto={Praia3card} descricao1linha= "Aproveite Búzios com todo luxo e pompa. Além de 2 diárias em Cruzeiro pelas praias da Azeda e Azedinha." descricao2linha= "Desfrute de um passeio exclusivo pelas Ruas das Pedras, com acesso ao melhor da comida e da night da região." descricao3linha= "O pacote inclui descontos exclusivos junto às empresas parceiras da dtravels." descricao4linha= "Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$1.500. "> </Cardmaior>
            <Cardmaior nomedopacote="Rio Adventures" foto={Praia4card} descricao1linha= "O Rio de Janeiro como você nunca viu! Com vista para a Zona Sul da cidade." descricao2linha= "Dentro desse pacote oferecemos 5 diárias com todos os esportes marítimos: aulas de surf, bodyboarding, stand up paddle e kitesurf!" descricao3linha= "O pacote inclui aulas para você e sua família e as melhores praias no nosso roteiro." descricao4linha= "Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$2.600." > </Cardmaior>
            <Cardmaior nomedopacote="Ubatuba Mergulhos" foto={Praia5card} descricao1linha= "Mergulho é com a gente mesmo! Nesse pacote oferecemos 5 diárias no melhor hotel de Ubatuba na frenta da praia." descricao2linha= "Incluídas duas saídas de mergulho, com todo o equipamento e instrutor por nossa conta, além da prática de scuba diving à vontade." descricao3linha= "O pacote inclui as praias mais paradisíacas, para você aproveitar tudo o que tem direito." descricao4linha= "Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$4.000. " > </Cardmaior> 
        </div>
    );
}
export default MainSection;