import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import { AppContextProvider } from '../../providers/AppContext';
import HomePage from '../../pages/Home';
import DetailsPage from '../../pages/Details';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/:id">
              <DetailsPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AuthProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
