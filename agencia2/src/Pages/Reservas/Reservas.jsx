import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Formularioreserva from "../../Components/SectionsReserva/Formularioreserva";
import "../../Components/Footer/Footer.css"

function Reservas(){
    return(
        <>
        <Navbar></Navbar>
        <Formularioreserva/>
        <Footer/>
        </>
    );
}
export default Reservas;
