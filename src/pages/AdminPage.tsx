import { instace } from 'api/axios';
import PayCheckModal from 'components/Admin/PayCheckModal';
import PwAdminInput from 'components/Admin/PwAdminInput';
import UnpaidList from 'components/Admin/UnpaidList';
import { HeaderText } from 'components/CounselLink';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
// 백엔드 erd 나오면.. 후에 unapidList의 타입 다시 시정
interface unPaidItem {
  customerEmail: string;
  counselorEmail: string;
  date: string;
  id: number;
}
export type unPaidList = unPaidItem[];

const AdminPage = () => {
  const [isCorrectPw, setIsCorrectPw] = useState<boolean>(false);
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const [unpaidList, setUnPaidList] = useState<unPaidList>([]);
  //비밀번호 input
  const [userInput, setUserInput] = useState<string>('');
  const dummyList = [
    {
      customerEmail: 'rmdnps10@gmail.com',
      counselorEmail: 'rmdnps10@naver.com',
      date: '2023-11-24',
      id: 0,
    },
    {
      customerEmail: 'asdffzs10@gmail.com',
      counselorEmail: 'wikzps10@naver.com',
      date: '2023-11-28',
      id: 1,
    },
  ];

  useEffect(() => {
    //후에 백엔드 연동
    const getData = async () => {
      try {
        instace.get('/admins');
      } catch {}
    };
    setUnPaidList(dummyList);
  }, []);

  return (
    <AdminPageContainer>
      <HeaderText>ShardMind (admin)</HeaderText>
      {isCorrectPw ? (
        <UnpaidList
          unPaidList={unpaidList}
          setIsVisibleModal={setIsVisibleModal}
        />
      ) : (
        <PwAdminInput setIsCorrectPw={setIsCorrectPw} />
      )}
      {isVisibleModal ? (
        <PayCheckModal setIsVisibleModal={setIsVisibleModal} />
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
