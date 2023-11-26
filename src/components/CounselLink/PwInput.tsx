import { instace } from 'api/axios';
import { Input } from 'components/Common';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
export const PwInput = () => {
  const [input, setInput] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const params = useParams();
  const navigate = useNavigate();
  const onClickPasswordCheck = async () => {
    try {
      const res = await instace.post(`/consults/${params.uuid}`, {
        password: input,
      });
      navigate(`/chat/${params.uuid}`, {
        state: { data: res.data, password: input },
      });
    } catch (err) {
      alert('비밀번호를 잘못 입력했습니다.');
    }
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
