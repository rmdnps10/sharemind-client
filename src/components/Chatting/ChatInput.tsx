import React, { useState } from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';
interface ChatInputProps {
  setIsCaution: any;
  setInputText: any;
  inputText: string;
  isActiveInput: boolean;
  isCaution: boolean;
}
function ChatInput({
  setIsCaution,
  inputText,
  setInputText,
  isActiveInput,
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
  return (
    <ChatInputWrapper>
      <ChatInputBox>
        <StyledInput
          onChange={textChange}
          value={inputText}
          placeholder={
            isActiveInput
              ? '상담을 받을 내용을 입력해주세요.'
              : '상담 내용 전송이 완료되었습니다'
          }
          disabled={!isActiveInput}
        />
        <SubmitButton onClick={textSubmit} isActive={isActiveInput}>
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
    width: 38rem;
  }

  position: fixed;
  bottom: 4rem;
  display: flex;
  justify-content: center;
`;

const ChatInputBox = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 4rem;
  background: rgba(217, 217, 217, 1);
  padding: 0.5rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledInput = styled.textarea`
  width: 65%;
  height: 1.4rem;
  font-size: 1.4rem;
  background: rgba(217, 217, 217, 1);
  line-height: 1.6rem;
  resize: none;
  outline: none;
  border: none;
`;
const SubmitButton = styled.button<{ isActive: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
`;

export default ChatInput;
