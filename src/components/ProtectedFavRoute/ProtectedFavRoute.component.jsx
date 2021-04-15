import React, { useContext } from 'react';
import AppContext from '../../providers/AppContext';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedFavRoute(props) {
  const { state } = useContext(AppContext);

  return state.authenticated ? <Route {...props} /> : <Redirect to="/login" />;
}
