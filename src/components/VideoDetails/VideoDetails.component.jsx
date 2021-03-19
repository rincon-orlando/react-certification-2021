import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  LeftPane,
  RightPane,
  VideoPlayer,
  Title,
  Description,
} from './VideoDetails.styles';
import useYouTubeSearchApi from '../../utils/hooks/youtube-api';
import VideoCardDetailsPage from '../VideoCardDetailsPage';
import AppContext from '../../providers/AppContext';

const VideoDetails = ({ videoId, onClickVideoHandler }) => {
  const [relatedVideoList, setRelatedVideoList] = useState([]);
  const { selectedVideoTitle, selectedVideoDescription, youTubeKey } = useContext(
    AppContext
  );
  // TODO: Do something meaningful while loading
  const [, remoteRelatedVideoList] = useYouTubeSearchApi(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=${videoId}&type=video&key=${youTubeKey}`,
    videoId
  );

  useEffect(() => {
    setRelatedVideoList(remoteRelatedVideoList);
  }, [remoteRelatedVideoList]);

  return (
    <Container>
      <LeftPane>
        <VideoPlayer
          id="ytplayer"
          type="text/html"
          src={`http://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
        />
        <Title>{selectedVideoTitle}</Title>
        <Description>{selectedVideoDescription}</Description>
      </LeftPane>
      <RightPane>
        {relatedVideoList.map(({ id, snippet }) => (
          <VideoCardDetailsPage
            key={id.videoId}
            thumbnail={snippet.thumbnails.medium.url}
            title={snippet.title}
            description={snippet.description}
            onClickVideoHandler={onClickVideoHandler}
            videoId={id.videoId}
          />
        ))}
      </RightPane>
    </Container>
  );
};

export default VideoDetails;
