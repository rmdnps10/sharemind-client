import { instace } from 'api/axios';
import { Input } from 'components/Common';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export const PwInput = () => {
  const [input, setInput] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const navigate = useNavigate();
  const onClickPasswordCheck = () => {
    // consult uuid 테스트용, 실제론 백엔드에서 메일로 링크를 쏴주기에,
    // useParmas써서 parmas.uuid 이런식으로 받아오면 될듯하다
    instace
      .post('/consults/f2de38ac-8173-4cc5-aeb2-e04eaf94bdbc', {
        password: input,
      })
      .then((res) => {
        navigate('/counselLink', {
          state: res,
        });
      });
  };

  return (
    <PwInputContainer>
      <Input
        width="100%"
        height="6.4rem"
        fontSize="1.6rem"
        placeholder="비밀번호를 입력해주세요"
        startPoint="2rem"
        value={input}
        onChange={handleOnChange}
      />
      <SubmitButton onClick={onClickPasswordCheck}>확인하기</SubmitButton>
    </PwInputContainer>
  );
};
const PwInputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 41.7rem;
  }
`;

const SubmitButton = styled.div`
  position: absolute;
  border-radius: 1.5rem;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 1.3rem;
  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
  top: 1rem;
  right: 1rem;
`;
