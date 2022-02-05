import 'materialize-css/dist/css/materialize.min.css';
import '../../Components/SectionsHome/SectionsHome.css';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
      <div className="card">
        <div className="card-image">
          <img  src={props.foto} />
          <span className="card-title">
          <Link to="/Destinos"><a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">+</i></a></Link>
              <h4>{props.nomedacidade} </h4></span>
        </div>
          <h6><i>{props.texto}</i> </h6>
          </div>
  );
}
export default Card;
