import { PaymentContent, PaymentHeader } from 'components/Payment';
import styled from 'styled-components';

const PaymentPage = () => {
  return (
    <PaymentPageContainer>
      <PaymentHeader />
      <PaymentContent />
    </PaymentPageContainer>
  );
};
export default PaymentPage;
const PaymentPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 3rem;
`;
