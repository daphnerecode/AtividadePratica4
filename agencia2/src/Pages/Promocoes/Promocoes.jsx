import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Footer/Footer.css"
import MainSectionPromo from "../../Components/SectionsPromocoes/MainSectionPromo";

function Promocoes(){
    return(
        <>
        <Navbar></Navbar>
        <MainSectionPromo/>
        <Footer/>
        </>
    );
}
export default Promocoes;
