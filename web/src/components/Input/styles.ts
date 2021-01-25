import styled from 'styled-components';

export const Container = styled.div`
  .label__input {
    color: var(--color-primary);
    font-size: 1.6rem;
  }
`;

export const InputStyle = styled.input`
  width: 100%;
  max-width: 21rem;
  height: 3.2rem;

  color: var(--color-text-darker);
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid var(--color-primary);
  outline: none;

  &:focus {
    border-color: var(--color-secondary);
  }
`;