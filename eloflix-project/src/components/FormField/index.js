import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormFieldWrapper, Label, Input } from "./styles";

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

function FormField({ label, name, type, value, onChange }) {
  const isTypeTextArea = type === "textarea";
  const tag = isTypeTextArea ? "textarea" : "input";

  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={tag}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />

        <Label.Text>{label}:</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
