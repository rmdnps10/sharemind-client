import React, { useState } from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';
interface ChatInputProps {
  setIsCaution: any;
  setInputText: any;
  inputText: string;
}
function ChatInput({ setIsCaution, inputText, setInputText }: ChatInputProps) {
  const textChange = (e: any) => {
    setInputText(e.target.value);
  };
  const textSubmit = () => {
    setIsCaution(true);
  };
  return (
    <ChatInputWrapper>
      <ChatInputBox>
        <StyledInput onChange={textChange} value={inputText} />
        <SubmitButton onClick={textSubmit}>작성하기</SubmitButton>
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
const SubmitButton = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
`;

export default ChatInput;
