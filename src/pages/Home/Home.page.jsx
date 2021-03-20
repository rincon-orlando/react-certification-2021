import React from 'react';
import { Title } from './Home.styles';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';

function HomePage() {
  return (
    <>
      <Header />
      <Title>Welcome to Orlando's YouTube Client</Title>
      <VideoList />
    </>
  );
}

export default HomePage;
