import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Recup from "./pages/Recup";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";


export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/recup" component={Recup} />
      <Route exact path ="/" component={Login} />
      <Route exact path ="/cadastro" component={Cadastro} />
    </BrowserRouter>
  );
}
