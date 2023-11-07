import styled from 'styled-components';
export const CounselLinkHeader = () => {
  return (
    <CounselLinkHeaderContainer>
      <HeaderText>ShareMind</HeaderText>
      <HeaderSubText>
        상담 링크에 접속하기 위해 비밀번호를 입력해 주세요.
      </HeaderSubText>
    </CounselLinkHeaderContainer>
  );
};

const CounselLinkHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const HeaderText = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
`;
const HeaderSubText = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 2.4rem;
`;
