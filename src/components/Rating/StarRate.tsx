import { ReactComponent as Star } from 'assets/images/Rating/Star.svg';
import { ReactComponent as EmptyStar } from 'assets/images/Rating/EmptyStar.svg';
import styled from 'styled-components';
interface StarRateProps {
  starRating: number;
  setStarRating: React.Dispatch<React.SetStateAction<number>>;
}
export const StarRate = ({ starRating, setStarRating }: StarRateProps) => {
  return (
    <StarRateContainer>
      {[1, 2, 3, 4, 5].map((value) => {
        if (value <= starRating) {
          return (
            <StarIcon
              onClick={() => {
                setStarRating(value);
              }}
            />
          );
        } else {
          return (
            <EmptyStarIcon
              onClick={() => {
                setStarRating(value);
              }}
            />
          );
        }
      })}
    </StarRateContainer>
  );
};
const StarRateContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 42rem;
  }
  margin-bottom: 5.2rem;
`;
const StarIcon = styled(Star)`
  width: 8rem;

  height: 7.6rem;
  cursor: pointer;
`;
const EmptyStarIcon = styled(EmptyStar)`
  width: 8rem;

  height: 7.6rem;
  cursor: pointer;
`;
