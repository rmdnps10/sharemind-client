import React from 'react';
import styled from 'styled-components';
import { SubmitButton } from './PwAdminInput';

interface UnPaidItemProps {
  customerEmail: string;
  counselorEmail: string;
  date: string;
  setIsVisibleModal: any;
}

function UnpaidItem({
  customerEmail,
  counselorEmail,
  date,
  setIsVisibleModal,
}: UnPaidItemProps) {
  const onClickCheckButton = () => {
    setIsVisibleModal(true);
  };
  return (
    <UnpaidCounselInform>
      <CustomerEmail>{customerEmail}</CustomerEmail>
      <CounselorEmail>{counselorEmail}</CounselorEmail>
      <ApplyDate>{date}</ApplyDate>
      <CheckButton onClick={onClickCheckButton}>확인하기</CheckButton>
    </UnpaidCounselInform>
  );
}

const UnpaidCounselInform = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 42rem;
  }
  justify-content: space-between;
  font-size: 1rem;
`;

const CustomerEmail = styled.div``;

const CounselorEmail = styled.div``;

const ApplyDate = styled.div``;

const CheckButton = styled(SubmitButton)`
  width: 5rem;
`;

export default UnpaidItem;
