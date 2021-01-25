import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;

  background: var(--color-primary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Content = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .nav__option {
    width: 100%;
    max-width: 150px;
    position: relative;
    padding: 1rem;
    transition: .2s;

    color: var(--color-text-light);
    font-size: 2rem;
    text-decoration: none;
    text-align: center;
  }

  .nav__option:hover {
    color: var(--color-secondary-light);
  }

  .nav__option:hover::after {
    content:"";
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0.5rem;
    left: 5rem;

    transition: .2s;
    opacity: 0;

    background: var(--color-secondary-light);
    border-radius: 20px;

    animation: appear .2s ease-in-out forwards;
  }

  @keyframes appear {
    from {
      opacity: 0;
      left: 5rem;
    }

    to {
      opacity: 1;
      left: 0;
    }
  }
`;