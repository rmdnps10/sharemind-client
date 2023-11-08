import React from 'react';
import styled from 'styled-components';
import UnpaidItem from './UnpaidItem';
interface UnpaidListProps {
  setIsVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function UnpaidList({ setIsVisibleModal }: UnpaidListProps) {
  return (
    <UnpaidListContainer>
      <ListTitle>미결제 리스트</ListTitle>
      <IndexAllDisPlay>
        <IndexDisplay>고객 이메일 | 상담사 이메일 | 신청일시</IndexDisplay>
        <IndexPayCheck> 결제확인 </IndexPayCheck>
      </IndexAllDisPlay>
      <UnpaidItem
        customerEmail="rmdnps10@gmail.com"
        counselorEmail="rmdnps10@gmial.com"
        date="2023-11-04"
        setIsVisibleModal={setIsVisibleModal}
      />
    </UnpaidListContainer>
  );
}

const UnpaidListContainer = styled.div`
  flex-direction: column;
  gap: 1rem;
  display: flex;
  width: 100%;
`;

const ListTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`;

const IndexAllDisPlay = styled.div`
  font-size: 1.3rem;
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const IndexPayCheck = styled.div`
  font-size: 1.3rem;
  padding-right: 0.4rem;
`;

const IndexDisplay = styled.div``;

export default UnpaidList;
