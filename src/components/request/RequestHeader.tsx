import { useParams } from 'react-router-dom';
import styled from 'styled-components';
//나중에 상담사 번호가져오기
export const RequestHeader = () => {
  const params = useParams();
  return (
    <RequestHeaderContainer>
      <HeaderText>ShareMind</HeaderText>
      <HeaderSubText>
        상담사{params.counselorid}님의 상담을 신청합니다.
      </HeaderSubText>
    </RequestHeaderContainer>
  );
};

const RequestHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 3.3rem;
`;
const HeaderText = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
`;
const HeaderSubText = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
`;
