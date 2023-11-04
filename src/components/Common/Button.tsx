import styled from 'styled-components';
import { BL, WH } from 'styles/color';
interface ButtonProps {
  width?: string;
  height?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  fontSize?: string;
  fontWeight?: string;
  children?: JSX.Element;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}
export const Button = ({
  width = 'fit-content',
  height = 'auto',
  type = 'button',
  fontSize = '1.4rem',
  fontWeight = '700',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      backgroundColor={BL}
      color={WH}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  width: string;
  height: string;
  fontSize: string;
  fontWeight: string;
  backgroundColor: string;
  color: string;
}>`
  font-family: 'NanumGothic';
  border-radius: 1.3rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
