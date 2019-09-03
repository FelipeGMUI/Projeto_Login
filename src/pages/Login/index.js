import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import signin from "../../assets/signin.svg";

export default function Login() {
  return (
    <Container>
      <div className="quadro">
        <form>
          <p>
            Log<sub>in</sub>
          </p>
          <label htmlFor="ra">Email</label>
          <input type="text" />
          <label htmlFor="ra">Senha</label>
          <input type="text" />
          <button type="submit">Entrar</button>
       
        </form>
       
      
        <nav >

        <Link className="link" to="/cadastro">
          <img src={signin} alt="Cadastro" />
          <p>Cadastrar Usuário</p>
        </Link>
        
        <Link className="link" to="/recup">
          <img src={signin} alt="Home" />
          <p>Recuperar Autenticação</p>
        </Link>
        </nav>
        </div>
        
      
    </Container>
  );
}
