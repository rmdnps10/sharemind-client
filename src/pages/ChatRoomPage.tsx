import CautionModal from 'components/Chatting/CautionModal';
import ChatBubble from 'components/Chatting/ChatBubble';
import ChatHeader from 'components/Chatting/ChatHeader';
import ChatInput from 'components/Chatting/ChatInput';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface messages {
  customer: [];
  counselor: [];
}

const ChatRoomPage = () => {
  // 고객인지, 상담사인지여부에 따라 랜더링 여부 다르게
  const [isCustomer, setIsCustomer] = useState<boolean>();
  // 경고 모달창 띄울지
  const [isCaution, setIsCaution] = useState<boolean>(false);
  // 인트로 띄울지
  const [isVisibleIntro, setIsVisibleIntro] = useState<boolean>(true);
  // input 활성화 여부
  const [isActiveInput, setIsActiveInput] = useState<boolean>(true);
  // 고객, 상담자의 메시지 상태
  const [messages, setMessages] = useState<messages>({
    customer: [],
    counselor: [],
  });
  console.log(messages);
  // 상담사 이름 설정
  const [name, setName] = useState<string>('');
  // input
  const [inputText, setInputText] = useState('');

  // useEffect 훅 안에서 후에 백엔드와 연결하여 데이터 fetch,,
  useEffect(() => {
    setIsCustomer(true);
    setName('정인영');
  }, []);
  console.log(messages);

  return (
    <ChatRoomPageContainer>
      <ChatHeader name={name} isVisibleIntro={isVisibleIntro} />
      {isCaution ? (
        <CautionModal
          inputText={inputText}
          setInputText={setInputText}
          setIsCaution={setIsCaution}
          setMessages={setMessages}
          setIsActiveInput={setIsActiveInput}
          setIsVisibleIntro={setIsVisibleIntro}
        />
      ) : (
        ''
      )}
      {messages.customer.map((el,idx) => (
        <ChatBubble text={el} key={idx}/>
      ))}

      <ChatInput
        isActiveInput={isActiveInput}
        isCaution={isCaution}
        setInputText={setInputText}
        inputText={inputText}
        setIsCaution={setIsCaution}
      />
    </ChatRoomPageContainer>
  );
};

const ChatRoomPageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  margin: 3rem;
`;

export default ChatRoomPage;
