import styled from 'styled-components';
interface ChatInputProps {
  setIsCaution: any;
  setInputText: any;
  inputText: string;
  isActiveInput: boolean | undefined;
  isActiveCounsel: boolean | undefined;
  isCaution: boolean | undefined;
}
function ChatInput({
  setIsCaution,
  inputText,
  setInputText,
  isActiveInput,
  isActiveCounsel,
  isCaution,
}: ChatInputProps) {
  const textChange = (e: any) => {
    if (isCaution) {
      return;
    }
    setInputText(e.target.value);
  };
  const textSubmit = () => {
    setIsCaution(true);
  };
  console.log(isActiveInput);
  return (
    <ChatInputWrapper>
      <ChatInputBox>
        <StyledInput
          onChange={textChange}
          value={inputText}
          placeholder={
            isActiveInput
              ? '상담을 받을 내용을 입력해주세요.'
              : isActiveCounsel
              ? '상담 내용 전송이 완료되었습니다.'
              : '종료된 상담입니다.'
          }
          disabled={!isActiveInput}
        />
        <SubmitButton onClick={textSubmit} $isActive={isActiveInput}>
          작성하기
        </SubmitButton>
      </ChatInputBox>
    </ChatInputWrapper>
  );
}

const ChatInputWrapper = styled.div`
  @media (max-width: 767px) {
    width: 86%;
  }
  @media (min-width: 768px) {
    width: 42rem;
  }

  position: fixed;
  bottom: 3rem;
  display: flex;
  justify-content: center;
`;

const ChatInputBox = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 4rem;
  background: rgba(217, 217, 217, 1);
  height: 100px;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledInput = styled.textarea<{ value: string }>`
  width: 65%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  align-self: flex-start;
  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
  font-size: 1.7rem;
  background: rgba(217, 217, 217, 1);
  line-height: 2rem;
  resize: none;
  outline: none;
  border: none;
`;
const SubmitButton = styled.button<{ $isActive: boolean | undefined }>`
  font-size: 1.7rem;
  font-weight: 600;
  visibility: ${(props) => (props.$isActive ? 'visible' : 'hidden')};
`;

export default ChatInput;
