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

  .dashboard__title {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }

  .dashboard__title h1 {
    color: var(--color-primary);
    font-size: 3.2rem;
  }

  .description {
    max-width: 760px;

    color: var(--color-text-darker);
    font-size: 1.6rem;
    text-align: center;
  }

  .dashboard__options {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .option {
    margin: 1rem;
    padding: 1.5rem;
    transition: .2s;

    font-size: 1.6rem;
    text-decoration: none;
    border: 1px solid var(--color-text-dark);
    border-radius: .8rem;
    cursor: pointer;
  }

  .option:hover {
    background: var(--color-primary);
    color: var(--color-text-light);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;