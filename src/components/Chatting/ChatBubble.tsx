import React from 'react';
import styled from 'styled-components';
interface ChatBubbleProps {
  text: string;
}

function ChatBubble({ text }: ChatBubbleProps) {
  return <ChatBubbleContainer></ChatBubbleContainer>;
}

const ChatBubbleContainer = styled.div`
  border-radius: 4.5rem;
  background: #d9d9d9;
`;

export default ChatBubble;
