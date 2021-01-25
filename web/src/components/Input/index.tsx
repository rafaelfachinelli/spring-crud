import React, { InputHTMLAttributes } from 'react';

import { Container, InputStyle } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: string;
}

const Input: React.FC<InputProps> = ({id, label, type, ...rest}) => {
  return (
    <Container>
      <label className="label__input" htmlFor={id}>{label}</label>
      <InputStyle id={id} name={id} type={type} {...rest} />
    </Container>
  );
}

export default Input;