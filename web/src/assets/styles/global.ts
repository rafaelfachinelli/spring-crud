import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #2c3e50;
    --color-primary-light: #34495e;

    --color-secondary-dark: #c0392b;
    --color-secondary: #c0392b;
    --color-secondary-light: #e74c3c;

    --color-text-darker: #2c3e50;
    --color-text-dark: #bdc3c7;
    --color-text-light: #ecf0f1;

    --color-selection: #4B61C3;

    --color-confirm: #2ecc71;
    --color-warning: #f1c40f;
    --color-ok: #2980b9;
    --color-cancel: #c0392b;

    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
  }

  ::selection {
    color: var(--color-text-light);
    background: var(--color-selection);
  }

  .confirm__button:hover {
    background: var(--color-confirm);
  }

  .ok__button:hover {
    background: var(--color-ok);
  }

  .warning__button:hover {
    background: var(--color-warning);
  }

  .cancel__button:hover {
    background: var(--color-cancel);
  }
`;