import styled from 'styled-components';

export const Container = styled.a`
  width: 120px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transition: .2s;
  
  background: var(--color-primary);
  color: var(--color-text-light);
  text-decoration: none;
  font-size: 1.6rem;
  border: none;
  border-radius: .8rem;
  cursor: pointer;
`;