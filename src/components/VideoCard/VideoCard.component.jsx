import React, { useContext } from 'react';
import { Container, Thumbnail, Title, Description } from './VideoCard.styles';
import AppContext from '../../providers/AppContext';

const VideoCard = ({ videoId, title, description, thumbnail }) => {
  const { navigateToVideoDetails } = useContext(AppContext);

  return (
    <Container onClick={() => navigateToVideoDetails(videoId, title, description)}>
      <Thumbnail src={thumbnail} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default VideoCard;
