import styled from 'styled-components';
//나중에 오픈카톡링크 고정
export const PaymentContent = () => {
  return (
    <PaymentContentContainer>
      <ContentText className="open-kakao">
        오픈채팅 링크 https://open.kakao.com/o/sVv1nvQf
        <br />
        <br />
        <br />
        1. 송금 방법: 우측 상단 메뉴바 클릭 <br />
        2. “셰어마인드” 프로필 클릭
        <br />
        3. 우측 상단 송금 버튼 활용하여 송금 <br />
        4. 신청자 이메일 주소 채팅으로 전송 <br />
        <br />
        <br />
        결제 금액: 5,000원
        <br />
        <br />
        <br />
        송금 확인이 완료되면 이메일로 상담 링크와 비밀번호가 전송됩니다.
      </ContentText>
    </PaymentContentContainer>
  );
};

const PaymentContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;
const ContentText = styled.div`
  font-weight: 700;
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
  @media (min-width: 768px) {
    font-size: 2.1rem;
  }
`;
