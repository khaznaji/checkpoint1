import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      <h1 class="col-md-10col-sm-2">Formulaire</h1>
     <form class="container">
  <div class="col-md-10col-sm-4">
  <div class="form-group">
    <label for="exampleInputPassword1">Nom</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder=" Entrer Votre Nom" required />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Prénom</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Entrer Votre Prénom" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Date De Naissance</label>
    <input type="date" class="form-control" id="exampleInputPassword1" placeholder=" Entrer Votre Nom"   required />
  </div>
  <div class="col-md-10col-sm-2">
    <label for="exampleInputPassword1">Numéro De Téléphone</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Entrer Votre Numéro De Téléphone" required/>
  </div>
    <label for="exampleInputEmail1">Adresse Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer votre Email" required/>
    <small id="emailHelp" class="form-text text-muted">Nous ne partagerons jamais votre e-mail avec qui que ce soit.</small>
  </div>
  
  <div class="col-md-10col-sm-2">
    <label for="exampleInputPassword1">Mot De Passe</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Entrer Votre Mot De Passe" required/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Se Souvenir De Moi</label>
  </div>
  <button type="submit" class="btn btn-primary">Entrer  </button>
  
</form>
    </div>
  );
}

export default App;
