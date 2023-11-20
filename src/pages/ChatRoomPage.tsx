import CautionModal from 'components/Chatting/CautionModal';
import ChatBubble from 'components/Chatting/ChatBubble';
import ChatHeader from 'components/Chatting/ChatHeader';
import ChatInput from 'components/Chatting/ChatInput';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface messages {
  customer: string[];
  counselor: string[];
}

const ChatRoomPage = () => {
  const location = useLocation();
  const { state } = location;
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
  const [counselorName, setCounselorName] = useState<string>('');
  // 고객 이름
  const [userName, setUserName] = useState<string>('');
  // input
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    setIsCustomer(state.loginByCustomer);
    const customerMessages = state.messageResponses.filter(
      (item: any) => item.isCustomer === true,
    );
    const userMessages = state.messageResponses.filter(
      (item: any) => item.isCustomer === false,
    );
    const customerContent = customerMessages.map((item: any) => item.content);
    const counselorContent = userMessages.map((item: any) => item.content);
    setMessages({
      customer: customerContent,
      counselor: counselorContent,
    });
    setIsVisibleIntro(false);
    console.log(isCustomer);
    if (isCustomer) {
      console.log(messages);
      setUserName(state.customerNickname);
      if (customerContent.length === 0 && counselorContent.length === 0) {
        setIsActiveInput(true);
      } else if (
        customerContent.length === 1 &&
        counselorContent.length === 1
      ) {
        setIsActiveInput(true);
        console.log('hello');
      } else {
        setIsActiveInput(false);
      }
    } else {
      setCounselorName(state.counselorNickname);
      if (messages.counselor.length === 0 && messages.customer.length === 1) {
        setIsActiveInput(true);
      } else if (
        messages.counselor.length === 1 &&
        messages.customer.length === 2
      ) {
        setIsActiveInput(true);
      } else {
        setIsActiveInput(false);
        // 만약에 채팅방의 상담 환불 여부, 상담 종료 여부가 true일 경우 : setIsActiveCounsel(false).
      }
    }
    // 상담 종료 여부도 통신해야하자않나?
    setIsActiveCounsel(true);
  }, [isActiveInput]);

  return (
    <ChatRoomPageContainer>
      <ChatHeader
        name={isCustomer ? counselorName : userName}
        isVisibleIntro={isVisibleIntro}
      />
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

      <ChatBubbleContainer>
        <ScrollContainer>
          {messages.customer.length > 0 ? (
            <ChatBubble
              text={messages.customer[0]}
              name={isCustomer ? counselorName : userName}
              isSubject={isCustomer ? true : false}
              isCustomer={isCustomer}
            />
          ) : (
            ''
          )}
          {messages.counselor.length > 0 ? (
            <ChatBubble
              text={messages.counselor[0]}
              name={isCustomer ? counselorName : userName}
              isSubject={isCustomer ? false : true}
              isCustomer={isCustomer}
            />
          ) : (
            ''
          )}
          {messages.customer.length > 1 ? (
            <ChatBubble
              text={messages.customer[1]}
              name={isCustomer ? counselorName : userName}
              isSubject={isCustomer ? true : false}
              isCustomer={isCustomer}
            />
          ) : (
            ''
          )}
          {messages.counselor.length > 1 ? (
            <ChatBubble
              text={messages.counselor[1]}
              name={isCustomer ? counselorName : userName}
              isSubject={isCustomer ? false : true}
              isCustomer={isCustomer}
            />
          ) : (
            ''
          )}
          <ScrollSpace />
        </ScrollContainer>
      </ChatBubbleContainer>
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
  margin: 3rem;
`;

const ChatBubbleContainer = styled.div`
  @media (max-width: 767px) {
    height: 74vh;
  }
  @media (min-width: 768px) {
    height: 74vh;
  }
`;
const ScrollContainer = styled.div`
  display: flex;
  height: 70vh;
  overflow: scroll;
  flex-direction: column;
`;

const ScrollSpace = styled.div`
  width: 100px;
  height: 420px;
`;
export default ChatRoomPage;
