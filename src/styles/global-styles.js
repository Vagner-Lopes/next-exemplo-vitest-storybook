import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    scroll-behavior: smooth;
  }

  html,
  body {
    background-color: ${({ theme }) => theme.colors.bg.main};
    color: ${({ theme }) => theme.colors.text.t1};
    font-family: -apple-system, Roboto, sans-serif;
  }
  h1 {
    font-size: 5.2rem;
  }
  h2 {
    font-size: 3.5rem;
  }
  h3 {
    font-size: 2.2rem;
  }
  p, a {
    font-size: 1.1rem;
  }

  .btn {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.7rem 1.6rem;
    border-radius: 0.5rem;
    transition: all 0.4s ease;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    :hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.t1};
    }
  }

`;

export default GlobalStyles;
