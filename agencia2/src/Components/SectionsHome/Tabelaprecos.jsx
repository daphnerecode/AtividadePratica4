import '../../Components/SectionsHome/Tabelaprecos.css'
import 'materialize-css/dist/css/materialize.min.css';

function Tabelaprecos() {
  return (
    <div className="divtabela">
      <table className="striped">
        <thead>
          <tr>
            <th><h5>Pacote Destino</h5></th>
            <th><h5>Diárias</h5></th>
            <th><h5>Valor</h5></th>
            <th><h5>Parcelamento em até:</h5></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><h6>Araruama Adventures </h6></td>
            <td><h6>5</h6></td>
            <td><h6>R$4.000</h6></td>
            <td><h6>5 vezes</h6></td>
          </tr>
          <tr>
            <td><h6>Ecoturismo na Barra(RJ</h6></td>
            <td><h6>3</h6></td>
            <td><h6>R$1.000</h6></td>
            <td><h6>2 vezes </h6></td>
          </tr>
          <tr>
            <td><h6>Delícias de Florianópolis</h6></td>
            <td><h6>3</h6></td>
            <td><h6>R$5.000</h6></td>
            <td><h6>6 vezes</h6></td>
          </tr>
          <tr>
            <td><h6>Araruama</h6></td>
            <td><h6>5</h6></td>
            <td><h6>R$4.000</h6></td>
            <td><h6>4 vezes</h6></td>
          </tr>
          <tr>
            <td><h6>Resort Búzios</h6></td>
            <td><h6>2</h6></td>
            <td><h6>R$1.500</h6></td>
            <td><h6>2 vezes</h6></td>
          </tr>
        </tbody>
      </table>
</div>
  );
}
export default Tabelaprecos;