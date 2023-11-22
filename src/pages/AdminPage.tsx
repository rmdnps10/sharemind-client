import PayCheckModal from 'components/Admin/PayCheckModal';
import PwAdminInput from 'components/Admin/PwAdminInput';
import UnpaidList from 'components/Admin/UnpaidList';
import { HeaderText } from 'components/CounselLink';
import { useState } from 'react';
import styled from 'styled-components';
// 백엔드 erd 나오면.. 후에 unapidList의 타입 다시 시정
interface unPaidItem {
  consultId: number;
  customerEmail: string;
  counselorEmail: string;
  createdAt: string;
}
export type unPaidList = unPaidItem[];

const AdminPage = () => {
  const [isCorrectPw, setIsCorrectPw] = useState<boolean>(false);
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const [unPaidList, setUnPaidList] = useState<unPaidList>([]);

  return (
    <AdminPageContainer>
      <HeaderText>ShardMind (admin)</HeaderText>
      {isCorrectPw ? (
        <UnpaidList
          unPaidList={unPaidList}
          setIsVisibleModal={setIsVisibleModal}
        />
      ) : (
        <PwAdminInput
          setIsCorrectPw={setIsCorrectPw}
          setUnpaidList={setUnPaidList}
        />
      )}
      {isVisibleModal ? (
        <PayCheckModal
          setIsVisibleModal={setIsVisibleModal}
          unPaidList={unPaidList}
          setUnPaidList={setUnPaidList}
        />
      ) : (
        ''
      )}
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
