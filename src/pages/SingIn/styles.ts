import styled from 'styled-components';

import { shade } from 'polished';

import signInBGImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      width: 100%;
      padding: 18px;
      color: #f4ede8;

      &::::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      color: #312e38;
      width: 100%;
      padding: 0 18px;
      margin-top: 24px;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#FF9000')};
      }
    }

    a {
      text-decoration: none;
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  // aqui o sinal de maior indica pro CSS que ele só deve estilizar os 's' que estão ma maior camada do Content
  > a {
    text-decoration: none;
    color: #ff9000;
    display: flex;
    margin-top: 24px;
    transition: color 0.2s;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBGImg}) no-repeat center;
  background-size: cover;
`;
