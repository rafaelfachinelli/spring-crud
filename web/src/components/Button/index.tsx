import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  
}

const Button: React.FC<AnchorProps> = (props) => {
  return (
    <Container
      className={props.className}
      onClick={props.onClick}
      type={props.type}
    >
        {props.children}
    </Container>
  );
}

export default Button;