import React, { useContext } from 'react';
import { Container, Thumbnail, Title, Description } from './VideoCard.styles';
import AppContext from '../../providers/AppContext';

const VideoCard = ({ videoId, title, description, thumbnail, onClickVideoHandler }) => {
  const {
    setSelectedVideoId,
    setSelectedVideoTitle,
    setSelectedVideoDescription,
  } = useContext(AppContext);

  // TODO: This is a great candidate to move to the context, but I need to figure out how to pass video ID because
  // right now it cycles.
  const playVideo = () => {
    console.debug(`Clicked video preview ${videoId}`);

    // Update context
    setSelectedVideoId(videoId);
    setSelectedVideoTitle(title);
    setSelectedVideoDescription(description);

    onClickVideoHandler(videoId);
  };

  return (
    <Container onClick={playVideo}>
      <Thumbnail src={thumbnail} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default VideoCard;
