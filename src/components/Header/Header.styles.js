import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Search = styled.input`
  background: ${(props) => (props.darkTheme ? 'black' : 'white')};
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
  left: 40px;
  position: absolute;
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

export const UserAvatar = styled.img`
  height: 15px;
  background: ${(props) => (props.darkTheme ? 'black' : 'white')};
  color: ${(props) => (props.darkTheme ? 'white' : 'black')};
`;

export const StyledLink = styled(Link)``;
