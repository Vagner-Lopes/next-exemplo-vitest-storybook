import styled from 'styled-components';

export const Container = styled.header`
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg.header};
    height: 90px;
    padding: 1.4rem 16%;
    border-bottom: 1px solid transparent;
    transition: all 0.4s ease;
    z-index: 2;

    .logo {
      a {
        font-size: 2.6rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .menu, .menu--mobile {
      display: flex;
      li a {
        color: ${({ theme }) => theme.colors.lighter};
        margin: 0 0.125rem;
        border: none;
        :hover {
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    .btn_theme,
    .btn_menu {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.lighter};
      font-size: 1.6rem;
      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .btn_menu {
      display: none;
      z-index: 2;
    }

    .menu--mobile {
      transition: all 0.5s ease-in-out;
      width: 0%;
      height: 0px;
      display: none;
    }
    /* From medium to small devices (tablets and phones, 890px and down) */

    @media only screen and (max-width: 890px) {
      padding: 4rem 3% 3.75rem;
      .menu{
        display: none;
      }

      .menu--mobile {
        background-color: ${({ theme }) => theme.colors.bg.header};
        margin-top: 100px;
        width: 100%;
        height: 190px;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          li {
            margin: 0.5rem;
            display: block;
            width: 80%;
          }
        }
      }

      .btn_menu {
        display: block;
      }
    }
  }
  .sticky {
    padding: 10px 16%;
    opacity: .8;
    border-bottom: 1px solid #0E1630;
    transition: all .3s;
  }
`;
