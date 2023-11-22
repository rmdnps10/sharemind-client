import {
  ButtonWrapper,
  CautionMessage,
  ModalBox,
  NoButton,
  YesButton,
} from 'components/Chatting';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { clickedDeleteEmail, deleteConsultId } from 'utils/atom';
import { instace } from 'api/axios';
import { unPaidList } from 'pages/AdminPage';
interface PayCheckModalProps {
  setIsVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
  unPaidList: unPaidList;
  setUnPaidList: React.Dispatch<React.SetStateAction<unPaidList>>;
}

function PayCheckModal({
  setIsVisibleModal,
  unPaidList,
  setUnPaidList,
}: PayCheckModalProps) {
  const deleteConsultIdNum = useRecoilValue(deleteConsultId);
  const clickedEmail = useRecoilValue(clickedDeleteEmail);
  const onClickYesButton = async () => {
    // 결제완료한 consult id 서버에서 지우기
    try {
      const response = await instace.patch(`/admins/${deleteConsultIdNum}`);
      const updatedUnPaidList = unPaidList.filter(
        (item) => item.consultId !== deleteConsultIdNum,
      );
      setUnPaidList(updatedUnPaidList);
      setIsVisibleModal(false);
    } catch {
      alert('상담 정보 찾을 수 없습니다.');
      setIsVisibleModal(false);
    }
  };

  const onClickNoButton = () => {
    setIsVisibleModal(false);
  };
  return (
    <ModalBox>
      <CautionMessage>{clickedEmail}님의 결제확인</CautionMessage>
      <ButtonWrapper>
        <YesButton onClick={onClickYesButton}>예</YesButton>
        <NoButton onClick={onClickNoButton}>아니오</NoButton>
      </ButtonWrapper>
    </ModalBox>
  );
}

export default PayCheckModal;
