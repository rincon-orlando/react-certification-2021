import React, { useContext } from 'react';
import { Container, Thumbnail, Title } from './VideoCardDetailsPage.styles';
import AppContext from '../../providers/AppContext';

const VideoCardDetailsPage = ({ videoId, title, description, thumbnail }) => {
  const { navigateToVideoDetails } = useContext(AppContext);

  return (
    <Container onClick={() => navigateToVideoDetails(videoId, title, description)}>
      <Thumbnail src={thumbnail} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
};

export default VideoCardDetailsPage;
