import Navbar from "../../Components/Navbar/Navbar";
import PrincipalContato from "../../Components/SectionsContato/PrincipalContato";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Footer/Footer.css"

export default ()=>{
    return(
        <>
        <Navbar></Navbar>
        <PrincipalContato/>
        <Footer/>
        </>
    );
}