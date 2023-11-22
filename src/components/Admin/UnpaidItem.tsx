import React from 'react';
import styled from 'styled-components';
import { SubmitButton } from './PwAdminInput';
import { useSetRecoilState } from 'recoil';
import { clickedDeleteEmail, deleteConsultId } from 'utils/atom';
interface UnPaidItemProps {
  consultId: number;
  customerEmail: string;
  counselorEmail: string;
  createdAt: string;
  setIsVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function UnpaidItem({
  consultId,
  customerEmail,
  counselorEmail,
  createdAt,
  setIsVisibleModal,
}: UnPaidItemProps) {
  const setDeleteCounsultId = useSetRecoilState(deleteConsultId);
  const setClickedDeleteEmail = useSetRecoilState(clickedDeleteEmail);
  const onClickCheckButton = () => {
    setDeleteCounsultId(consultId);
    setClickedDeleteEmail(customerEmail);
    setIsVisibleModal(true);
  };
  return (
    <UnpaidCounselInform>
      <CustomerEmail>{customerEmail}</CustomerEmail>
      <CounselorEmail>{counselorEmail}</CounselorEmail>
      <ApplyDate>{createdAt}</ApplyDate>
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
  width: 6rem;
  border-radius: 1rem;
  @media (mix-width: 768px) {
    width: 3rem;
    font-size: 1rem;
  }
`;

export default UnpaidItem;
