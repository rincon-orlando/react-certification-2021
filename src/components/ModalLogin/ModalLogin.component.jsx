import React, { createRef, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import loginApi from '../../utils/login';
import AppContext from '../../providers/AppContext';
import { REDUCER_LOGIN_ACTION } from '../../utils/constants';

import {
  ModalBackground,
  ModalContent,
  CloseButton,
  LoginForm,
  FormLabel,
  Input,
  LoginButton,
  ErrorPane,
} from './ModalLogin.styled';

function ModalLogin() {
  // TODO: Enable theming by consuming state.darkTheme
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  const username = createRef();
  const password = createRef();

  const [errorValue, setErrorValue] = useState('');

  const goBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  const performLogin = (event) => {
    event.preventDefault();
    loginApi(username.current.value, password.current.value)
      .then((response) => {
        setErrorValue('');
        dispatch({ type: REDUCER_LOGIN_ACTION, payload: response });
        history.goBack();
      })
      .catch((response) => {
        setErrorValue(response.message);
      });
  };

  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={goBack}>&times;</CloseButton>
        <LoginForm onSubmit={performLogin}>
          <FormLabel htmlFor="uname">
            <b>Username</b>
          </FormLabel>
          <Input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            ref={username}
          />

          <FormLabel htmlFor="psw">
            <b>Password</b>
          </FormLabel>
          <Input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            ref={password}
          />

          <ErrorPane hidden={!errorValue}>{errorValue}</ErrorPane>

          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </ModalContent>
    </ModalBackground>
  );
}

export default ModalLogin;
