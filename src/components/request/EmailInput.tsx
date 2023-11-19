import { instace } from 'api/axios';
import { Button, Input } from 'components/Common';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BK } from 'styles/color';
export const EmailInput = () => {
  const params = useParams();
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    instace.post('/consults', {
      counselorId: params.counselorId,
      email: input,
    });
    navigate('/payment');
  };

  return (
    <EmailInputContainer>
      <EmailInputText color={BK}>이메일 입력*</EmailInputText>
      <form onSubmit={handleOnSubmit}>
        <Input
          width="100%"
          height="6rem"
          fontSize="2.2rem"
          startPoint="2rem"
          value={input}
          onChange={handleOnChange}
        />
        <EmailDetailText color={BK}>
          이메일로도 상담 링크가 전송되며 내 상담 링크와 비밀번호를 찾으실 수
          있습니다. 링크 찾기/비밀번호 초기화는 오픈채팅으로 문의해주세요.
        </EmailDetailText>
        <TextRequest className="agree">
          서비스 이용을 위해 개인정보취급방침에 동의합니다.
        </TextRequest>
        <TextRequest className="price">상담사1/상담료: 5,000원</TextRequest>
        <Button type="submit" width="100%" height="5.7rem" fontSize="2.1rem">
          결제하기
        </Button>
      </form>
    </EmailInputContainer>
  );
};
const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 41.7rem;
  }
  .agree {
    @media (max-width: 767px) {
      margin-top: 10rem;
    }
    @media (min-width: 768px) {
      margin-top: 21rem;
    }
  }
  .price {
    margin-top: 5.7rem;
    margin-bottom: 3.3rem;
  }
`;
const EmailInputText = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
  color: ${(props) => props.color};
  margin-bottom: 1.5rem;
`;
const EmailDetailText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;
  color: ${(props) => props.color};
  margin-top: 1.5rem;
`;
const TextRequest = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;
`;
