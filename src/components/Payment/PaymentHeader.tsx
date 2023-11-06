import styled from 'styled-components';
//나중에 상담사 번호가져오기
export const PaymentHeader = () => {
  return (
    <PaymentHeaderContainer>
      <HeaderText>ShareMind</HeaderText>
      <HeaderSubText>
        아래 오픈채팅 링크에 참여하여 오픈채팅 송금 방식으로 결제해 주세요.
      </HeaderSubText>
    </PaymentHeaderContainer>
  );
};

const PaymentHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const HeaderText = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom
`;
const HeaderSubText = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
`;
