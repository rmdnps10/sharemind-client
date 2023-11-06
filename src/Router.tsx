import RequestPage from 'pages/RequestPage';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/request" element={<RequestPage />} />
      </Routes>
    </>
  );
};
export default Router;
