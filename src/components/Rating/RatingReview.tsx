import { useState } from 'react';
import styled from 'styled-components';
import { StarRate } from './StarRate';
import { Button, Input } from 'components/Common';

export const RatingReview = () => {
  //별점 number
  const [starRating, setStarRating] = useState(0);
  const [review, setReview] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //여기서 post 처리
    if (starRating === 0) {
      alert('별점을 입력해주세요.');
    } else if (review.trim() === '') {
      alert('리뷰를 작성해주세요.');
    } else {
      setReview('');
      setStarRating(0);
    }
  };
  return (
    <RatingReviewContainer>
      <StarRate starRating={starRating} setStarRating={setStarRating} />
      <RatingText>리뷰 입력</RatingText>
      <form onSubmit={handleOnSubmit}>
        <StyledTextArea
          value={review}
          onChange={handleOnChange}
          placeholder="(입력창)"
        />
        <Space />
        <Button type="submit" width="41.7rem" height="5.7rem" fontSize="2.1rem">
          제출하기
        </Button>
      </form>
    </RatingReviewContainer>
  );
};
const RatingReviewContainer = styled.div`
  margin-top: 4.8rem;
`;
const RatingText = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
  padding-left: 2rem;
  margin-bottom: 0.7rem;
`;
const StyledTextArea = styled.textarea`
  width: 38.7rem;
  height: 24.3rem;
  border: none;
  outline: none;
  background-color: #d9d9d9;
  border-radius: 3rem;
  resize: none;
  padding: 1.5rem;

  font-family: 'NanumGothic';
  font-size: 2.2rem;
  font-weight: 700;
  &::placeholder {
    font-weight: 400;
  }
`;
const Space = styled.div`
  height: 11.5rem;
`;
