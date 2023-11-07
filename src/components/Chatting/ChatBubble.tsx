import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
interface ChatBubbleProps {
  text: string;
  name: string;
  isSubject: boolean;
  isCustomer: boolean;
}
function ChatBubble({ text, isSubject, isCustomer, name }: ChatBubbleProps) {
  const [subject, setSubject] = useState('');
  useEffect(() => {
    if (isCustomer) {
      if (isSubject) {
        setSubject('나');
      } else {
        setSubject(name);
      }
    } else {
      if (isSubject) {
        setSubject(name);
      } else {
        setSubject('내담자');
      }
    }
  }, []);

  return (
    <ChatBubbleContainer $isSubject={isSubject}>
      <ChatSubject>{subject}</ChatSubject>
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
  margin-top: 1rem;
`;

export default ChatBubble;
