import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => (props.darkTheme ? 'black' : 'white')};
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
`;

export const Title = styled.h1`
  text-align: center;
`;
