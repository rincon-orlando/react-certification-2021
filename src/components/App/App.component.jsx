import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import { AppContextProvider } from '../../providers/AppContext';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <AuthProvider>
          <Switch>
            {/* I could move the routing for these two paths to a completely different page with the context, 
                but I need to check if the videoid is good to take... */}
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/:id">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
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
