import { Input } from 'components/Common';
import { useState } from 'react';
import styled from 'styled-components';
export const PwInput = () => {
  const [input, setInput] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput('');
  };
  return (
    <PwInputContainer>
      <form onSubmit={handleOnSubmit}>
        <Input
          width="100%"
          height="6.4rem"
          fontSize="2.2rem"
          startPoint="2rem"
          value={input}
          onChange={handleOnChange}
        />
      </form>
    </PwInputContainer>
  );
};
const PwInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 41.7rem;
  }
`;
