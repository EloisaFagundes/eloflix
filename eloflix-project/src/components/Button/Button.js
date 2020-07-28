import React from "react";
import { ButtonLink } from "./Styles";

function Button(props) {
  // const  props => {className: "o que alguem passar", href:"/"}
  // console.log(props)
  return (
    <>
      <ButtonLink href={props.href} className={props.className}>
        {props.children}
      </ButtonLink>
    </>
  );
}

export default Button;
