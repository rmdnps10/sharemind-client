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
    setIsCustomer(false);
    setMessages({
      customer: [
        '지난달 6일 국회 본회의에서 이균용 전 대법원장 후보자의 임명동의안이 부결된 지 약 한 달 만입니다.김대기 비서실장은 조 후보자에 대해 법관으로서 국민이 재판받을 권리를 보장하는데 평생을 헌신했다면서 대법관으로서 원칙론자로 정평이 났으며 사회적 약자와 소수자 권리보호에 앞장서 왔다고 전했습니다.1957년생인 조 후보자는 만 70세까지인 대법원장 정년 규정상 임기 6년을 다 채우지 못할 전망입니다그럼에도 조 후보자를 지명한 이유에 대해 대통령실 고위관계자는 대법원장 공백 사태가 오래되면 안 된다. 국회를 통과하는 부분에 신경을 많이 썼다고 밝혔습니다.      대법원장은 대통령이 지명하면 국회 인사청문회와 본회의 표결 절차를 거쳐 최종 임명되는데, 국회의 동의를 얻어야 합니다.',
      ],
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
    // eslint-disable-next-line
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

      <ChatBubbleContainer>
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
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export default ChatRoomPage;
