import React from "react";
import Logo from "../../assets/images/Logo.png";
import { LogoStyled, MenuStyled } from "./Styles";
import Button from "../Button/Button";

function Menu() {
  return (
    <>
      <MenuStyled>
        <a href="/">
          <LogoStyled src={Logo} alt="catflix azul"></LogoStyled>
        </a>
        <Button href="/novo-video"> Novo vídeo</Button>
      </MenuStyled>
    </>
  );
}

export default Menu;
