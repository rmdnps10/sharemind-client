import PayCheckModal from 'components/Admin/PayCheckModal';
import PwAdminInput from 'components/Admin/PwAdminInput';
import UnpaidList from 'components/Admin/UnpaidList';
import ChatHeader from 'components/Chatting/ChatHeader';
import { HeaderText } from 'components/CounselLink';
import { useState } from 'react';
import styled from 'styled-components';

const AdminPage = () => {
  const [isCorrectPw, setIsCorrectPw] = useState<boolean>(false);
  const [isVisibleModel, setIsVisibleModal] = useState<boolean>(false);

  return (
    <AdminPageContainer>
      <HeaderText>ShardMind (admin)</HeaderText>
      {isCorrectPw ? <UnpaidList /> : <PwAdminInput setIsCorrectPw = {setIsCorrectPw}/>}
      {isVisibleModel ? <PayCheckModal /> : ''}
    </AdminPageContainer>
  );
};

const AdminPageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  margin: 3rem;
  gap: 3rem;
`;
export default AdminPage;
