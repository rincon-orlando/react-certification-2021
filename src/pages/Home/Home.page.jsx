import React from 'react';
import mockedData from '../../utils/mocked-youtube.json';
import { Title } from './Home.styles';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';

function HomePage() {
  const { items } = mockedData;

  return (
    <>
      <Header />
      <Title>Welcome to Orlando's YouTube Client</Title>
      <VideoList
        title="Welcome to Orlando's YouTube Client"
        items={items}
        filter="videos"
      />
    </>
  );
}

export default HomePage;
