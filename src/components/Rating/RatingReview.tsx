import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StarRate } from './StarRate';
import { Button } from 'components/Common';
import { instace } from 'api/axios';
import { useNavigate } from 'react-router-dom';
import { RatingHeader } from './RatingHeader';
interface patchReviewBody {
  reviewUuid: string;
  rating?: number;
  comment?: string;
}
interface ratingReviewProps {
  uuid?: string;
}
export const RatingReview = ({ uuid }: ratingReviewProps) => {
  //isValid
  const [isValid, setIsValid] = useState(true);
  //별점 number
  const [starRating, setStarRating] = useState(0);
  const [review, setReview] = useState('');
  //submit 시 여러번 클릭 못하게 펜딩
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };
  useEffect(() => {
    // uuid 바뀌면 먼저 해당 uuid가 valid한지 판단, 유효하지 않을경우 예외처리
    const getValidReview = async () => {
      try {
        const response = await instace.get(`/reviews/${uuid}`);
        console.log('valid');
      } catch (error) {
        setIsValid(false);
      }
    };
    getValidReview();
  }, [uuid]);
  // submit 시 보내기
  const patchReview = async () => {
    try {
      setIsSubmitting(true);
      //body 세팅
      const reviewBody: patchReviewBody = {
        reviewUuid: uuid || '', //리뷰의 UUID로 변경
        rating: starRating,
        comment: review,
      };
      // axios를 사용하여 PATCH 요청 보내기
      await instace.patch('/reviews', reviewBody);
      setIsValid(false);
      setReview('');
      setStarRating(0);
    } catch (error) {
      // 에러 처리 로직 추가
      alert('리뷰 정보를 찾을 수 없습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) {
      // 이미 요청 중인 경우 무시
      return;
    }
    if (starRating === 0) {
      alert('별점을 입력해주세요.');
      return;
    } else if (review.trim() === '') {
      alert('리뷰를 작성해주세요.');
      return;
    }
    patchReview();
  };
  if (isValid === true) {
    return (
      <RatingReviewContainer>
        <StarRate starRating={starRating} setStarRating={setStarRating} />
        <RatingText>리뷰 입력</RatingText>
        <form onSubmit={handleOnSubmit} className="form-review">
          <StyledTextArea
            value={review}
            onChange={handleOnChange}
            placeholder="(입력창)"
          />
          <Space />
          <Button type="submit" width="100%" height="5.7rem" fontSize="2.1rem">
            제출하기
          </Button>
        </form>
      </RatingReviewContainer>
    );
  } else {
    return (
      <RatingReviewContainer>
        <StarRate starRating={0} setStarRating={setStarRating} />
        <RatingText>리뷰 입력</RatingText>
        <form onSubmit={handleOnSubmit} className="form-review">
          <StyledTextArea
            value={review}
            onChange={handleOnChange}
            placeholder="유효하지 않은 review입니다"
            readOnly
          />
        </form>
      </RatingReviewContainer>
    );
  }
};
const RatingReviewContainer = styled.div`
  margin-top: 4.8rem;
  .form-review {
    display: flex;
    flex-direction: column;
  }
`;
const RatingText = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
  padding-left: 2rem;
  margin-bottom: 0.7rem;
`;
const StyledTextArea = styled.textarea`
  @media (max-width: 767px) {
    width: 90%;
    height: 12rem;
  }
  @media (min-width: 768px) {
    width: 38.7rem;
    height: 24.3rem;
  }
  border: none;
  outline: none;
  background-color: #d9d9d9;
  border-radius: 3rem;
  resize: none;
  padding: 1.5rem;
  font-family: 'NanumGothic';
  font-size: 1.8rem;
  font-weight: 700;
  &::placeholder {
    font-weight: 400;
  }
`;
const Space = styled.div`
  @media (max-width: 767px) {
    height: 5rem;
  }
  @media (min-width: 768px) {
    height: 15.3rem;
  }
`;
