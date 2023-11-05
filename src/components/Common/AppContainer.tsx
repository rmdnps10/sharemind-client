import styled from 'styled-components';

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  return <StyledApp>{children}</StyledApp>;
};

export default AppContainer;

const StyledApp = styled.div`
  height: 100%;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 48rem;
  }
`;
