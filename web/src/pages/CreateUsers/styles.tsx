import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 51.2rem;
  height: 100%;
  max-height: 51.2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .create__title {
    margin-bottom: 2rem;

    color: var(--color-primary);
    font-size: 3.2rem;
  }

  input {
    margin-bottom: 1.5rem
  }

  .create__actions {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2rem;
  }
`;