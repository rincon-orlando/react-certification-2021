import React, { useContext } from 'react';
import { Container, Title } from './Home.styles';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';
import AppContext from '../../providers/AppContext';

function HomePage() {
  const { state } = useContext(AppContext);

  return (
    <Container darkTheme={state.darkTheme}>
      <Header />
      <Title>Welcome to Orlando's YouTube Client</Title>
      <VideoList />
    </Container>
  );
}

export default HomePage;
