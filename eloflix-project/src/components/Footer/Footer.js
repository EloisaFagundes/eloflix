import React from 'react';
import { FooterBase, LogoStyled } from './Styles';
import Logo from "../../assets/images/Logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <LogoStyled src={Logo} alt="catflix azul" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
