import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Footer/Footer.css"
import SectionsHome from '../../Components/SectionsHome/SectionsHome'

function Home (){
    return(
        <>
        <Navbar/>
        <SectionsHome/> 
        <Footer/>
        </>
    );
}
export default Home;