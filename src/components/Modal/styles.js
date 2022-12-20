import styled from 'styled-components';

export const Container = styled.div`
  #fade {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 5;
  }

  #fade,
  #modal {
    transition: 0.5s;
    opacity: 1;
    pointer-events: all;
  }

  #modal {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    min-width: 30%;
    background-color: #ffffff;
    color: #1e1e1e;
    padding: 1.2rem;
    border-radius: 0.5rem;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    z-index: 10;
  }

  .modal_header {
    h3{
      margin-right: 2rem;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 16px;
    padding-bottom: 16px;
  }

  .modal_body p {
    margin-bottom: 10px;
  }
`;
