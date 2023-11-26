import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
interface ChatBubbleProps {
  text: string;
  name: string;
  isSubject: boolean;
  isCustomer: boolean | undefined;
}
function ChatBubble({ text, isSubject, name }: ChatBubbleProps) {
  return (
    <ChatBubbleContainer $isSubject={isSubject}>
      <ChatSubject>{name}</ChatSubject>
      <ChatContent>{text}</ChatContent>
    </ChatBubbleContainer>
  );
}

const ChatBubbleContainer = styled.div<{ $isSubject: boolean }>`
  align-self: ${(props) => (props.$isSubject ? 'flex-end' : 'flex-start')};
  border-radius: 1.8rem;
  width: 80%;
  padding: 2rem;
  background: #d9d9d9;
  margin: 8px 0px;
`;

const ChatSubject = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
`;
const ChatContent = styled.div`
  font-size: 1.7rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  margin-top: 1rem;
  line-height: 140%;
`;

export default ChatBubble;
