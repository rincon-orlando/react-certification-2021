import React, { useContext } from 'react';
import { Container, Thumbnail, Title } from './VideoCardDetailsPage.styles';
import AppContext from '../../providers/AppContext';

const VideoCardDetailsPage = ({
  videoId,
  title,
  description,
  thumbnail,
  onClickVideoHandler,
}) => {
  const {
    setSelectedVideoId,
    setSelectedVideoTitle,
    setSelectedVideoDescription,
  } = useContext(AppContext);

  const playVideo = () => {
    console.debug(`Clicked details video card ${videoId}`);

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
    </Container>
  );
};

export default VideoCardDetailsPage;
