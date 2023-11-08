import CautionModal from 'components/Chatting/CautionModal';
import ChatBubble from 'components/Chatting/ChatBubble';
import ChatHeader from 'components/Chatting/ChatHeader';
import ChatInput from 'components/Chatting/ChatInput';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface messages {
  customer: string[];
  counselor: string[];
}

const ChatRoomPage = () => {
  // 고객인지, 상담사인지여부에 따라 랜더링 여부 다르게
  const [isCustomer, setIsCustomer] = useState<boolean>();
  // 경고 모달창 띄울지
  const [isCaution, setIsCaution] = useState<boolean>();
  // 인트로 띄울지
  const [isVisibleIntro, setIsVisibleIntro] = useState<boolean>(true);
  // input 활성화 여부
  const [isActiveInput, setIsActiveInput] = useState<boolean>();
  // 상담 종료 여부 (24시간 내 답장안하거나, 추가질문이 아예 끝난상태 , 상담이 종료되는 경우는
  const [isActiveCounsel, setIsActiveCounsel] = useState<boolean>();
  // 고객, 상담자의 메시지 상태
  const [messages, setMessages] = useState<messages>({
    customer: [''],
    counselor: [''],
  });
  // 상담사 이름 설정
  const [name, setName] = useState<string>('');
  // input
  const [inputText, setInputText] = useState('');

  // useEffect 훅 안에서 후에 백엔드와 연결하여 데이터 fetch,,
  useEffect(() => {
    // 백엔드 연결시 axios.get 추가
    setName('정인영');
    setIsCustomer(true);
    setMessages({
      customer: ['안녕하세요', '흑흑 너무힘들엉'],
      counselor: ['조금만 더 힘내세요'],
    });
    setIsVisibleIntro(false);
    if (isCustomer) {
      if (messages.counselor.length === 0 && messages.customer.length === 0) {
        setIsActiveInput(true);
      } else if (
        messages.counselor.length === 1 &&
        messages.customer.length === 1
      ) {
        setIsActiveInput(true);
      } else {
        setIsActiveInput(false);
      }
    } else {
      if (messages.counselor.length === 0 && messages.customer.length === 1) {
        setIsActiveInput(true);
      } else if (
        messages.counselor.length === 1 &&
        messages.customer.length === 2
      ) {
        setIsActiveInput(true);
        console.log(messages);
      } else {
        setIsActiveInput(false);
        // 만약에 채팅방의 상담 환불 여부, 상담 종료 여부가 true일 경우 : setIsActiveCounsel(false).
      }
    }
    setIsActiveCounsel(true);
  }, [messages.customer.length, messages.counselor.length]);

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
          isCustomer={isCustomer}
        />
      ) : (
        ''
      )}

      {messages.customer.length > 0 ? (
        <ChatBubble
          text={messages.customer[0]}
          name={name}
          isSubject={isCustomer ? true : false}
          isCustomer={isCustomer}
        />
      ) : (
        ''
      )}
      {messages.counselor.length > 0 ? (
        <ChatBubble
          text={messages.counselor[0]}
          name={name}
          isSubject={isCustomer ? false : true}
          isCustomer={isCustomer}
        />
      ) : (
        ''
      )}
      {messages.customer.length > 1 ? (
        <ChatBubble
          text={messages.customer[1]}
          name={name}
          isSubject={isCustomer ? true : false}
          isCustomer={isCustomer}
        />
      ) : (
        ''
      )}
      {messages.counselor.length > 1 ? (
        <ChatBubble
          text={messages.counselor[1]}
          name={name}
          isSubject={isCustomer ? false : true}
          isCustomer={isCustomer}
        />
      ) : (
        ''
      )}

      <ChatInput
        isActiveInput={isActiveInput}
        isActiveCounsel={isActiveCounsel}
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
