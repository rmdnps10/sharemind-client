import styled from 'styled-components';
import { BK, GR, LG } from 'styles/color';
interface InputProps {
  width?: string;
  height?: string;
  type?: string;
  fontSize?: string;
  fontWeight?: string;
  value?: string;
  status?: 'active' | 'complete' | 'finish' | undefined;
  placeholder?: string;
  startPoint?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
}
export const Input = ({
  width = 'fit-content',
  height = 'auto',
  type = 'text',
  fontSize = '1.4rem',
  fontWeight = '700',
  value,
  status = 'active',
  placeholder,
  startPoint = '1rem',
  onChange,
  onFocus,
  onBlur,
}: InputProps) => {
  if (status === 'active') {
    return (
      <StyledInput
        width={width}
        height={height}
        type={type}
        fontSize={fontSize}
        fontWeight={fontWeight}
        value={value}
        placeholder={placeholder}
        startPoint={startPoint}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        backgroundColor={GR}
        color={BK}
      ></StyledInput>
    );
  } else if (status === 'complete') {
    return (
      <StyledLocked
        width={width}
        height={height}
        fontSize={fontSize}
        backgroundColor={GR}
        color={LG}
      >
        상담 내용 전송이 완료되었습니다.
      </StyledLocked>
    );
  } else if (status === 'finish') {
    return (
      <StyledLocked
        width={width}
        height={height}
        fontSize={fontSize}
        backgroundColor={GR}
        color={LG}
      >
        종료된 상담입니다.
      </StyledLocked>
    );
  }
};

const StyledInput = styled.input<{
  width: string;
  height: string;
  fontSize: string;
  fontWeight: string;
  startPoint: string;
  backgroundColor: string;
  color: string;
}>`
  font-family: 'NanumGothic';
  border-radius: 3rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: calc(${(props) => `calc(${props.width} - ${props.startPoint})`});
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding-left: ${(props) => props.startPoint};
  &::placeholder {
    font-weight: 400;
  }
`;
const StyledLocked = styled.div<{
  width: string;
  height: string;
  fontSize: string;
  backgroundColor: string;
  color: string;
}>`
  font-family: 'NanumGothic';
  border-radius: 3rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
`;
