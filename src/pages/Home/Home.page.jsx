import React, { useState } from 'react';
import { Title } from './Home.styles';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';
import VideoDetails from '../../components/VideoDetails';
import { useHistory, useParams, useLocation } from 'react-router-dom';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('wizeline');
  const history = useHistory();
  const location = useLocation();
  const { id: videoId } = useParams();

  const updateSearchTerm = (searchTerm) => {
    console.debug(`Updated search term ${searchTerm}`);
    if (location.pathname !== '/') {
      // We were somewhere else, move back to home page with updated query
      console.debug('Navigating to home page');
      history.push('/');
    }
    setSearchTerm(searchTerm);
  };

  const openVideoDetails = (videoId) => {
    console.debug(`Navigate to video details ${videoId}`);
    // I tried to get this videoId from the context, but it was not being updated soon enough (I was getting the previous value)
    history.push(`/${videoId}`);
  };

  return (
    <>
      <Header searchVideo={updateSearchTerm} />

      {/* If we have a video id, render the details page, otherwise the main page. */}
      {videoId ? (
        <>
          <VideoDetails videoId={videoId} onClickVideoHandler={openVideoDetails} />
        </>
      ) : (
        <>
          <Title>Welcome to Orlando's YouTube Client</Title>
          <VideoList searchTerm={searchTerm} onClickVideoHandler={openVideoDetails} />
        </>
      )}
    </>
  );
}

export default HomePage;
