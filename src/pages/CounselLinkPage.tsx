import { CounselLinkHeader, PwInput } from 'components/CounselLink';
import styled from 'styled-components';

const CounselLinkPage = () => {
  return (
    <CounselLinkPageContainer>
      <CounselLinkHeader />
      <PwInput />
    </CounselLinkPageContainer>
  );
};
export default CounselLinkPage;
const CounselLinkPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 3rem;
`;
