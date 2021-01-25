import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 30rem;
  height: auto;
  min-height: 14.1rem;
  margin: 1rem;

  border: 1px solid var(--color-text-dark);
  border-radius: .8rem;
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .user__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5rem;
  }

  .user__id {
    width: 100%;
    color: var(--color-secondary);
    font-size: 2rem;
    font-weight: 600;
  }

  .user__name {
    color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: 600;
  }

  .user__email {
    color: var(--color-text-darker);
    font-size: 1.4rem;
  }

  .user__phone {
    color: var(--color-secondary);
    font-size: 1.2rem;
  }

  .user__actions {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
  }
`;