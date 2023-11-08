import {
  ButtonWrapper,
  CautionMessage,
  ModalBox,
  NoButton,
  YesButton,
} from 'components/Chatting';
import React from 'react';

interface PayCheckModalProps {
  setIsVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function PayCheckModal({ setIsVisibleModal }: PayCheckModalProps) {
  const onClickYesButton = () => {
    // 서버로 클릭한 해당 id의 상담 결제확인했다고 전송
    setIsVisibleModal(false);
  };
  const onClickNoButton = () => {
    setIsVisibleModal(false);
  };
  return (
    <ModalBox>
      <CautionMessage>rmdnps10@gmail.com님의 결제확인</CautionMessage>
      <ButtonWrapper>
        <YesButton onClick={onClickYesButton}>예</YesButton>
        <NoButton onClick={onClickNoButton}>아니오</NoButton>
      </ButtonWrapper>
    </ModalBox>
  );
}

export default PayCheckModal;
