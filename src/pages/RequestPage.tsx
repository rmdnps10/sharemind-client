import EmailInput from 'components/request/EmailInput';
import styled from 'styled-components';

const RequestPage = () => {
  return (
    <RequestPageContainer>
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
