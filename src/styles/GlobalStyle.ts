import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import NanumGothicBold from '../assets/fonts/NanumGothic-Bold.ttf';
import NanumGothicRegular from '../assets/fonts/NanumGothic-Regular.ttf';
import NanumGothicExtraBold from '../assets/fonts/NanumGothic-ExtraBold.ttf';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
   font-family: 'NanumGothic';
   src: local('NanumGothicBold'),local('NanumGothicBold');
   font-weight: 700;
   font-display: swap;
   src: url(${NanumGothicBold}) format('truetype');
  }
  @font-face {
     font-family: 'NanumGothic';
     src: local('NanumGothicRegular'),local('NanumGothicRegular');
     font-weight: 400;
     font-display: swap;
     src: url(${NanumGothicRegular}) format('truetype');
  }
  @font-face {
     font-family: 'NanumGothic';
     src: local('NanumGothicExtraBold'),local('NanumGothicExtraBold');
     font-weight: 800;
     font-display: swap;
     src: url(${NanumGothicExtraBold}) format('truetype');
  }
  ::-webkit-scrollbar {
    display: none;
  }

  html {
    font-size:10px;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px;
  }
  input {
   border: none;
    outline: none;
  }
  button {
    width: auto;
    background: none;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  a {
    text-decoration: none;
  }
`;
