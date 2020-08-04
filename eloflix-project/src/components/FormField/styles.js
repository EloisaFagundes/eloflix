import styled, { css }  from "styled-components";


export const FormFieldWrapper = styled.div`
position: relative;
textarea {
  min-height: 150px;
}
input[type="color"] {
  padding-left: 56px;
}
`;

export const Label = styled.label``;


export const Input = styled.input`
background: #53585d;
color: #f5f5f5;
display: block;
width: 100%;
height: 57px;
font-size: 18px;

outline: 0;
border: 0;
border-top: 4px solid transparent;
border-bottom: 4px solid #53585d;

padding: 16px 16px;
margin-bottom: 45px;

resize: none;
border-radius: 4px;
transition: border-color 0.3s;

&:focus {
  border-bottom-color: var(--primary);
}
&:focus:not([type="color"]) + ${Label.Text} {
  transform: scale(0.6) translateY(-10px);
}
${({ value }) => {
  const hasValue = value.length > 0;
  return (
    hasValue &&
    css`
      &:not([type="color"]) + ${Label.Text} {
        transform: scale(0.6) translateY(-10px);
      }
    `
  );
}}
`;