import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Footer/Footer.css"
import Formulariocadastro from "../../Components/SectionsCadastroClientes/Formulariocadastro";

 function Cadastroclientes(){
    return(
        <>
        <Navbar/>
        <Formulariocadastro/>
        <Footer/>
        </>
    );
}
export default Cadastroclientes;