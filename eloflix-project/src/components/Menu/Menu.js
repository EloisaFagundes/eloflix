import React from "react";
import { Link } from "react-router-dom"
import Logo from "../../assets/images/Logo.png";
import { LogoStyled, MenuStyled } from "./Styles";
import Button from "../Button/Button";

function Menu() {
  return (
    <>
      <MenuStyled>
        <Link to="/">
          <LogoStyled src={Logo} alt="catflix azul"></LogoStyled>
        </Link>
        
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
      </MenuStyled>
    </> 
  );
}

export default Menu;
