import { Button } from 'components/Common';
import { EmailInput, RequestHeader } from 'components/request';
import styled from 'styled-components';

const RequestPage = () => {
  return (
    <RequestPageContainer>
      <RequestHeader />
      <EmailInput />
      <TextRequest className="agree">
        서비스 이용을 위해 개인정보취급방침에 동의합니다.
      </TextRequest>
      <TextRequest className="price">상담사1/상담료: 5,000원</TextRequest>
      <Button width="41.7rem" height="5.7rem" fontSize="2.1rem">
        결제하기
      </Button>
    </RequestPageContainer>
  );
};
export default RequestPage;
const RequestPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 3rem;
  .agree {
    margin-top: 21rem;
  }
  .price {
    margin-top: 5.7rem;
    margin-bottom: 3.3rem;
  }
`;
const TextRequest = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
