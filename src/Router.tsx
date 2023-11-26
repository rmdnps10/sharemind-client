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
        {/* 1. 상담사 연결페이지,  */}
        <Route path="/request/:counselorId" element={<RequestPage />} />
        {/* 2. 결제페이지 */}
        <Route path="/payment" element={<PaymentPage />} />
        {/* 3. 상담방 비밀번호 입력 페이지 */}
        <Route path="/counselLink/:uuid" element={<CounselLinkPage />} />
        {/* 4. 상담방 페이지 */}
        <Route path="/chat/:uuid" element={<ChatRoomPage />}></Route>
        {/* 5. 상담 후 평가 페이지 */}
        <Route path="/rating/:uuid" element={<RatingPage />} />=
        {/* 6. 어드민페이지 */}
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
    </>
  );
};
export default Router;
