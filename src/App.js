import React from "react";
import Header from "./Header";
import adm from "./view/adm/index";
import catalogo from "./view/catalogo/index";
import contato from "./view/contato/index";
import galeria_fotos from "./view/galeria_fotos/index";


import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={catalogo} />
        <Route path="/catalogo" component={catalogo} />
        <Route path="/contato" component={contato} />
        <Route path="/galeria_fotos" component={galeria_fotos} />
        <Route path="/adm" component={adm} />
      </div>
    </Router>
  );
}

export default App;
