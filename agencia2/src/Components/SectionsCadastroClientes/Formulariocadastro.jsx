function Formulariocadastro() {
    return (
        <div>               
         <h4>Cadastro Cliente</h4>
           <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Digite aqui seu nome" id="first_name" type="text" class="validate"/>
          <label for="first_name"></label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>         
          <label for="last_name">Sobrenome </label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">CPF</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Digite o seu Endereço (Rua, Avenida, Travessa)" id="first_name" type="text" class="validate"/>
          <label for="first_name"></label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>         
          <label for="last_name">Número </label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Bairro</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Telefone</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Email</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action"> Enviar!</button>
      </form>
      </div>
        </div>
    );
}

export default Formulariocadastro; 