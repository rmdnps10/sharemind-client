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
          width="41.7rem"
          height="7.4rem"
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
`;
