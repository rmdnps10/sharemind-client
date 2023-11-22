import { RatingHeader, RatingReview } from 'components/Rating';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
const RatingPage = () => {
  const { uuid } = useParams();
  return (
    <RatingPageContainer>
      <RatingHeader />
      <RatingReview uuid={uuid} />
    </RatingPageContainer>
  );
};
export default RatingPage;
const RatingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
`;
