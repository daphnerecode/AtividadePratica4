import '../../Components/SectionsDestinos/Cardmaior.css'

function Cardmaior(props) {
    return (
        <div className="container-fluid">
            <div className="divnomedopacote">
                <h4>{props.nomedopacote} </h4>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3 p-2">
                    <div className="divimagem">
                        <img className="imgsdoslugares" src={props.foto} />
                    </div>
                    <div className="divtexto">
                        <h5>{props.descricao1linha} </h5>
                        <h5>{props.descricao2linha} </h5>
                        <h5>{props.descricao3linha} </h5>
                        <h5>{props.descricao4linha} </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cardmaior;