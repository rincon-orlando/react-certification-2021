import styled from 'styled-components';

const Container = styled.div``;

const Search = styled.input``;

const RightHolder = styled.span`
  float: right;
`;

const BurgerButton = styled.input`
  width: 30px;
  height: 30px;
`;

const ProfileButton = styled.input`
  width: 50px;
  height: 30px;
`;

const ToggleButton = styled.input`
  -webkit-appearance: none;
  position: relative;
  outline: none;
  width: 50px;
  height: 25px;
  background-color: blue;
  border-radius: 12px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    background-color: lightgray;
    border-radius: 12px;
  }

  &:checked {
    background-color: blue;
  }

  &:checked:before {
    transform: translate(100%);
  }
`;

const Styled = {
  Container,
  Search,
  RightHolder,
  BurgerButton,
  ProfileButton,
  ToggleButton,
};

export default Styled;