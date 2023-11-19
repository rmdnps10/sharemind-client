import AdminPage from 'pages/AdminPage';
import ChatRoomPage from 'pages/ChatRoomPage';
import CounselLinkPage from 'pages/CounselLinkPage';
import PaymentPage from 'pages/PaymentPage';
import RatingPage from 'pages/RatingPage';
import RequestPage from 'pages/RequestPage';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/request/:counselorid" element={<RequestPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/counselLink" element={<CounselLinkPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/chat" element={<ChatRoomPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
    </>
  );
};
export default Router;
