import React from 'react';
import styled from 'styled-components';
interface ChatBubbleProps {
  text: string;
}

function ChatBubble({ text }: ChatBubbleProps) {
  return (
    <ChatBubbleContainer>
      <ChatSubject>나</ChatSubject>
      <ChatContent>{text}</ChatContent>
    </ChatBubbleContainer>
  );
}

const ChatBubbleContainer = styled.div`
  align-self: flex-end;
  border-radius: 3rem;
  width: 80%;
  padding: 2rem;
  background: #d9d9d9;
`;

const ChatSubject = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
`;
const ChatContent = styled.div`
  font-size: 1.7rem;
`;

export default ChatBubble;
