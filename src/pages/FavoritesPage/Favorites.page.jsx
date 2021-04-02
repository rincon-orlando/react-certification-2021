import React, { useContext } from 'react';
import Header from '../../components/Header';
// import VideoDetails from '../../components/VideoDetails';
import { Container } from './Favorites.styles';
import AppContext from '../../providers/AppContext';

function FavoritesPage() {
  const { state } = useContext(AppContext);

  // TODO: Make a refactor to VideoDetails to take the
  // video list as props, it will need to cover the
  // side bar video list too

  return (
    <Container darkTheme={state.darkTheme}>
      <Header />
      {/* <VideoDetails /> */}
    </Container>
  );
}

export default FavoritesPage;
