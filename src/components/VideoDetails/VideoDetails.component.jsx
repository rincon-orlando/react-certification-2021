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
import { useParams } from 'react-router-dom';

const VideoDetails = () => {
  const [relatedVideoList, setRelatedVideoList] = useState([]);
  const { id: urlVideoId } = useParams();
  const { state } = useContext(AppContext);
  const videoId = state.currentVideo.videoId || urlVideoId;
  // TODO: Do something meaningful while loading
  const [, remoteRelatedVideoList] = useYouTubeSearchApi(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=${videoId}&type=video&key=${state.youTubeKey}`,
    videoId
  );

  useEffect(() => {
    setRelatedVideoList(remoteRelatedVideoList);
  }, [remoteRelatedVideoList]);

  return (
    <Container darkTheme={state.darkTheme}>
      <LeftPane>
        <VideoPlayer
          id="ytplayer"
          type="text/html"
          src={`http://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
        />
        <Title>{state.currentVideo.videoTitle}</Title>
        <Description>{state.currentVideo.description}</Description>
      </LeftPane>
      <RightPane>
        {relatedVideoList.map(
          ({ id, snippet }) =>
            id &&
            snippet && (
              <VideoCardDetailsPage
                key={id.videoId}
                thumbnail={snippet.thumbnails.medium.url}
                title={snippet.title}
                description={snippet.description}
                videoId={id.videoId}
              />
            )
        )}
      </RightPane>
    </Container>
  );
};

export default VideoDetails;
