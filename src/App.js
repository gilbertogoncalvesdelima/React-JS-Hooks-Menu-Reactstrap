import React from "react";
import Header from "./Header";
import login from "./view/login/index";
import home from "./view/home/index";
import nossasSolucoes from "./view/nossasSolucoes/index";
import conhecaJussi from "./view/conhecaJussi/index";



import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={home} />
        <Route path="/home" component={home} />
        <Route path="/login" component={login} />
        <Route path="/nossassolucoes" component={nossasSolucoes} />
        <Route path="/conhecajussi" component={conhecaJussi} />
      </div>
    </Router>
  );
}

export default App;
