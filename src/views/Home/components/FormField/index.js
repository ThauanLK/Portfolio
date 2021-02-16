import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import "../../../../constants/colors.css";

const WrapperFormField = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;
const Label = styled.label``;

Label.Text = styled.span`
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 20px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--black);

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 25px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--blue);
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
function FormField({ label, type, name, value, onChange }) {
  const isTextArea = type === "textarea";
  const fieldId = `id_${name}`;
  const tag = isTextArea ? "textarea" : "input";
  const hasValue = Boolean(value.length);
  return (
    <WrapperFormField>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={"off"}
        />
        <Label.Text>{label}:</Label.Text>
      </Label>
    </WrapperFormField>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
