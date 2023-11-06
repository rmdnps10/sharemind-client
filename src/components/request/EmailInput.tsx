import { Input } from 'components/Common';
import styled from 'styled-components';
import { BK } from 'styles/color';
const EmailInput = () => {
  return (
    <EmailInputContainer>
      <EmailInputText color={BK}>이메일 입력*</EmailInputText>
      <Input width="41.7rem" height="6rem" />
      <EmailDetailText color={BK}>
        이메일로도 상담 링크가 전송되며 내 상담 링크와 비밀번호를 찾으실 수
        있습니다. 링크 찾기/비밀번호 초기화는 오픈채팅으로 문의해주세요.
      </EmailDetailText>
    </EmailInputContainer>
  );
};
export default EmailInput;
const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const EmailInputText = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
  color: ${(props) => props.color};
`;
const EmailDetailText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  width: 39rem;
  color: ${(props) => props.color};
`;
