import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from 'components/Common/AppContainer.tsx';
import { GlobalStyle } from 'styles/GlobalStyle.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <AppContainer>
      <GlobalStyle />
      <App />
    </AppContainer>
  </BrowserRouter>,
  //</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
