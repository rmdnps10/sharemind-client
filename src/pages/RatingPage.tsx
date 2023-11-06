import { RatingHeader, RatingReview } from 'components/Rating';
import styled from 'styled-components';

const RatingPage = () => {
  return (
    <RatingPageContainer>
      <RatingHeader />
      <RatingReview />
    </RatingPageContainer>
  );
};
export default RatingPage;
const RatingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 3rem;
`;
