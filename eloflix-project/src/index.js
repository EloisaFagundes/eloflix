import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "../src/pages/Home/Home"
import CadastroVideo from "../src/pages/cadastro/Video/Video"

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroCategoria from "./pages/cadastro/Categoria/Categoria";

const ErrorPage = () => (<div> Página não encontrada. ERRO 404.</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
