import styled from 'styled-components';

export const ModalBackground = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin: 10px 0;
`;

export const Input = styled.input`
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid black;
  line-height: 1.5em;
  padding: 5px;
`;

export const LoginButton = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
`;

export const ErrorPane = styled.div`
  margin: 10px 0;
  color: red;
`;
