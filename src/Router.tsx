import PaymentPage from 'pages/PaymentPage';
import RequestPage from 'pages/RequestPage';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/request" element={<RequestPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
};
export default Router;
