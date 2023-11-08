import ChatHeader from 'components/Chatting/ChatHeader';
import { HeaderText } from 'components/CounselLink';
import { useState } from 'react';
import styled from 'styled-components';

const AdminPage = () => {
  const [isCorretPw, setIsCorrectPw] = useState<boolean>(false);

  return (
    <AdminPageContainer>
      <HeaderText>ShardMind (admin)</HeaderText>
      
    </AdminPageContainer>
  );
};

const AdminPageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  margin: 3rem;
`;
export default AdminPage;
