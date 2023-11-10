import { HeaderText } from 'components/CounselLink';
import React from 'react';
import styled from 'styled-components';
interface ChatHeaderProps {
  name: string;
  isVisibleIntro: boolean | undefined;
}
function ChatHeader({ name, isVisibleIntro }: ChatHeaderProps) {
  return (
    <>
      <HeaderText>ShareMind</HeaderText>
      <HeaderInform>{name} 님의 상담입니다.</HeaderInform>
      {isVisibleIntro ? (
        <HeaderIntroduction>
          기본 질문/답변 1회로 구성되며 최대 1회까지 추가 질문을 할 수 있습니다.
          이후에 추가 상담이 필요하실 경우 추가 결제가 필요하니 내용을 신중하게
          작성해 주세요.
        </HeaderIntroduction>
      ) : (
        ''
      )}
    </>
  );
}

const HeaderInform = styled.div`
  margin-top: 1rem;
  font-size: 1.8rem;
`;

const HeaderIntroduction = styled.div`
  margin-top: 10rem;
  font-size: 1.8rem;
  line-height: 2.3rem;
`;
export default ChatHeader;
