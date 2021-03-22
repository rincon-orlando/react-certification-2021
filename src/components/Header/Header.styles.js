import styled from 'styled-components';

export const Search = styled.input`
  background: ${(props) => (props.darkTheme ? 'black' : 'white')};
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
`;

export const RightHolder = styled.span`
  float: right;
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  background: ${(props) => (props.darkTheme ? 'black' : 'white')};
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
`;
