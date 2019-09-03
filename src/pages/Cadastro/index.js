import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import signin from "../../assets/signin.svg";
export default function Cadastro() {
  return (
    <Container>
      <div>
        <form>
          <p>
           Cadastro 
          </p>
          <label htmlFor="ra">Digite seu Nome</label>
          <input type="text" />
          <label htmlFor="ra">Digite seu Email</label>
          <input type="text" />
          <label htmlFor="ra">Digite sua senha</label>
          <input type="text" />
          <button type="submit">Entrar</button>
       
        </form>
       
        <nav>
          <Link className="link" to="/">
            <img src={signin} alt="Login" />
            <p>Retornar ao login</p>
          </Link>
        </nav>
      </div>
        </Container>
  );
}



