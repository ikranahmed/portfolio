import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>Your Name</h1>
      <Navigation />
    </HeaderWrapper>
  );
}