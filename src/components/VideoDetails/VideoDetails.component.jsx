import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  LeftPane,
  RightPane,
  VideoPlayer,
  Title,
  Description,
  VideoDescriptionContainer,
  FavoritesContainer,
  FavoritesButton,
} from './VideoDetails.styles';
import useYouTubeSearchApi from '../../utils/hooks/youtube-api';
import VideoCardDetailsPage from '../VideoCardDetailsPage';
import AppContext from '../../providers/AppContext';
import { useParams } from 'react-router-dom';
import {
  MdFavorite as Favorite,
  MdFavoriteBorder as FavoriteBorder,
} from 'react-icons/md';
import {
  REDUCER_ADD_TO_FAVORITES_ACTION,
  REDUCER_REMOVE_FROM_FAVORITES_ACTION,
} from '../../utils/constants';

const VideoDetails = () => {
  const [relatedVideoList, setRelatedVideoList] = useState([]);
  const { id: urlVideoId } = useParams();
  const { state, dispatch } = useContext(AppContext);
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
        <div>
          <VideoDescriptionContainer>
            <Title>{state.currentVideo.videoTitle}</Title>
            <Description>{state.currentVideo.description}</Description>
          </VideoDescriptionContainer>
          <FavoritesContainer hidden={!state.authenticated}>
            {state.favoriteVideos && state.favoriteVideos.includes(videoId) ? (
              <FavoritesButton
                darkTheme={state.darkTheme}
                onClick={() =>
                  dispatch({
                    type: REDUCER_REMOVE_FROM_FAVORITES_ACTION,
                    payload: videoId,
                  })
                }
              >
                <Favorite /> Remove from favorites
              </FavoritesButton>
            ) : (
              <FavoritesButton
                darkTheme={state.darkTheme}
                onClick={() =>
                  dispatch({ type: REDUCER_ADD_TO_FAVORITES_ACTION, payload: videoId })
                }
              >
                <FavoriteBorder /> Add to favorites
              </FavoritesButton>
            )}
          </FavoritesContainer>
        </div>
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
