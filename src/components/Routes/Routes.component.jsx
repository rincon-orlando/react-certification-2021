import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from '../../pages/Home';
import DetailsPage from '../../pages/Details';
import ModalLogin from '../ModalLogin';
import NotFound from '../../pages/NotFound';
import FavoritesPage from '../../pages/FavoritesPage';
import ProtectedFavRoute from '../ProtectedFavRoute';
import SideBar from '../Slide';

export default function Routes() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div id="Container">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'Container'} />

      <div id="page-wrap">
        <Switch location={background || location}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={ModalLogin} />
          <ProtectedFavRoute exact path="/favorites" component={FavoritesPage} />
          <Route exact path="/:id" component={DetailsPage} />
          <Route path="*" component={NotFound} />
        </Switch>
        {background && <Route path="/login" component={ModalLogin} />}
      </div>
    </div>
  );
}
