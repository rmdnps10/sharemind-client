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
