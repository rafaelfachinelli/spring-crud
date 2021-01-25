import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 108rem;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .users__title {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }

  .users__title h1 {
    color: var(--color-primary);
    font-size: 3.2rem;
  }
`;