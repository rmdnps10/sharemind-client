import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import NanumGothicBold from '../assets/fonts/NanumGothic-Bold.ttf';
import NanumGothicRegular from '../assets/fonts/NanumGothic-Regular.ttf';
import NanumGothicExtraBold from '../assets/fonts/NanumGothic-ExtraBold.ttf';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`); //"--vh"라는 속성으로 정의해준다.
}
setScreenSize();
window.addEventListener('resize', () => setScreenSize());
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
    background-color: #f5f5f5;
  }
  /*app 가운데 정렬*/
  body {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px;
    
  }
  #root{
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    display: flex;
    justify-content: center;
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
