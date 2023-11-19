import { EmailInput, RequestHeader } from 'components/Request';
import styled from 'styled-components';

const RequestPage = () => {
  return (
    <RequestPageContainer>
      <RequestHeader />
      <EmailInput />
    </RequestPageContainer>
  );
};
export default RequestPage;
const RequestPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 3rem;
`;
