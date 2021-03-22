import React, { useContext } from 'react';
import Header from '../../components/Header';
import VideoDetails from '../../components/VideoDetails';
import { Container } from './Details.styles';
import AppContext from '../../providers/AppContext';

function DetailsPage() {
  const { state } = useContext(AppContext);

  return (
    <Container darkTheme={state.darkTheme}>
      <Header />
      <VideoDetails />
    </Container>
  );
}

export default DetailsPage;
