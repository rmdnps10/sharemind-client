import styled from 'styled-components';
//나중에 상담자 이름
export const RatingHeader = () => {
  return (
    <RatingHeaderContainer>
      <HeaderText>ShareMind</HeaderText>
      <HeaderSubText>판매자이름 님과의 상담을 평가해주세요.</HeaderSubText>
    </RatingHeaderContainer>
  );
};

const RatingHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.4rem;
`;
const HeaderText = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
`;
const HeaderSubText = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
`;
