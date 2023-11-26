import { instace } from 'api/axios';
import CautionModal from 'components/Chatting/CautionModal';
import ChatBubble from 'components/Chatting/ChatBubble';
import ChatHeader from 'components/Chatting/ChatHeader';
import ChatInput from 'components/Chatting/ChatInput';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface messages {
  customer: string[];
  counselor: string[];
}

const ChatRoomPage = () => {
  const location = useLocation();
  const params = useParams();
  const { state } = location;
  const navigate = useNavigate();
  try {
    const { password } = state;
  } catch (err) {
    navigate(`/counselLink/${params.uuid}`);
  }

  // 고객인지, 상담사인지여부에 따라 랜더링 여부 다르게
  const [inputText, setInputText] = useState('');

  const [isCustomer, setIsCustomer] = useState<boolean>();
  // 경고 모달창 띄울지
  const [isCaution, setIsCaution] = useState<boolean>();
  // 인트로 띄울지
  const [isVisibleIntro, setIsVisibleIntro] = useState<boolean>();
  // input 활성화 여부
  const [isActiveInput, setIsActiveInput] = useState<boolean>();
  // 상담 종료 여부 (24시간 내 답장안하거나, 추가질문이 아예 끝난상태 , 상담이 종료되는 경우는
  const [isActiveCounsel, setIsActiveCounsel] = useState<boolean>();

  const [chatData, setChatData] = useState();

  useEffect(() => {
    const getChatData = async () => {
      try {
        const res = await instace.post(`/consults/${params.uuid}`, {
          password: state.password,
        });
        setChatData(res.data);
        const length = res.data.messageResponses.length;
        if (res.data.loginByCustomer) {
          if (length === 0) {
            setIsActiveCounsel(true);
            setIsActiveInput(true);
            setIsVisibleIntro(true);
          } else if (length === 1) {
            setIsActiveCounsel(true);
            setIsActiveInput(false);
            setIsVisibleIntro(false);
          } else if (length === 2) {
            setIsActiveInput(true);
            setIsVisibleIntro(true);
          } else if (length === 3) {
            setIsActiveCounsel(true);
            setIsActiveInput(false);
            setIsVisibleIntro(false);
          } else {
            setIsActiveCounsel(false);
            setIsActiveInput(false);
            setIsVisibleIntro(false);
          }
        } else {
          if (length === 0) {
            setIsVisibleIntro(true);
            setIsActiveCounsel(true);
            setIsActiveInput(false);
          } else if (length === 1) {
            setIsVisibleIntro(false);
            setIsActiveCounsel(true);
            setIsActiveInput(true);
          } else if (length == 2) {
            setIsActiveInput(false);
          } else if (length == 3) {
            setIsActiveCounsel(true);
            setIsActiveInput(true);
            setIsVisibleIntro(false);
          } else {
            setIsActiveInput(false);
            setIsActiveCounsel(false);
          }
        }
      } catch (err) {
        navigate(`/counselLink/${params.uuid}`);
      }
    };

    getChatData();
  }, [chatData?.messageResponses?.length, isCaution]);
  return (
    <ChatRoomPageContainer>
      <ChatHeader
        name={
          chatData?.loginByCustomer
            ? chatData?.counselorNickname
            : chatData?.customerNickname
        }
        isVisibleIntro={isVisibleIntro}
      />
      {isCaution ? (
        <CautionModal
          inputText={inputText}
          setInputText={setInputText}
          setIsCaution={setIsCaution}
          setIsActiveInput={setIsActiveInput}
          isCustomer={chatData?.loginByCustomer}
          consultId={chatData?.consultId}
        />
      ) : (
        ''
      )}
      <ChatBubbleContainer>
        <ScrollContainer>
          {chatData?.messageResponses?.map((item) => (
            <ChatBubble
              text={item.content}
              name={
                item.isCustomer
                  ? chatData?.customerNickname
                  : chatData?.counselorNickname
              }
              isSubject={
                chatData?.loginByCustomer == item.isCustomer ? true : false
              }
              key={item.createdAt}
            />
          ))}
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
