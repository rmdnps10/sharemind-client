import styled from 'styled-components';
interface CautionModalProps {
  setIsCaution: any;
  setMessages: any;
  inputText: string;
  setInputText: any;
  setIsActiveInput: any;
  setIsVisibleIntro: any;
  isCustomer: boolean | undefined;
}

function CautionModal({
  inputText,
  setInputText,
  setIsCaution,
  setMessages,
  setIsActiveInput,
  setIsVisibleIntro,
  isCustomer,
}: CautionModalProps) {
  const onYesClick = () => {
    // 백엔드 연결시 axios.post 코드 추가
    // 백엔드 연결시 axios.post 코드 추가
    setMessages((prev: any) => {
      if (isCustomer) {
        return { ...prev, customer: [...prev.customer, inputText] };
      } else {
        return { ...prev, customer: [...prev.counselor, inputText] };
      }
    });
    setInputText('');
    setIsCaution(false);
    setIsActiveInput(false);
    setIsVisibleIntro(false);
  };
  const onNoClick = () => {
    setIsCaution(false);
  };
  return (
    <ModalBox>
      <CautionMessage>
        이대로 전송하시겠습니까? <br /> 전송 이후에는 수정이 불가하며 잘못
        전송된 경우에도 질문 횟수는 복구되지 않습니다.
      </CautionMessage>

      <ButtonWrapper>
        <YesButton onClick={onYesClick}>예</YesButton>
        <NoButton onClick={onNoClick}>아니오</NoButton>
      </ButtonWrapper>
    </ModalBox>
  );
}

const ModalBox = styled.div`
  position: absolute;
  top: 20rem;
  width: 90%;
  padding: 2rem 1rem;
  border-radius: 3rem;
  background-color: rgba(217, 217, 217, 1);
  border: 1px solid rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CautionMessage = styled.div`
  width: 86%;
  font-size: 1.8rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 4rem;
`;
const YesButton = styled.button`
  font-size: 1.8rem;
  font-weight: 700;
`;

const NoButton = styled(YesButton)``;
export default CautionModal;
