import React, { useState, useEffect, useContext } from 'react';
import { List } from './VideoList.styles';
import VideoCard from '../VideoCard';
import useYouTubeSearchApi from '../../utils/hooks/youtube-api';
import AppContext from '../../providers/AppContext';

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  const { state } = useContext(AppContext);
  // TODO: Do something meaninful while loading
  const [, remoteVideoList] = useYouTubeSearchApi(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${state.searchTerm}&key=${state.youTubeKey}`,
    state.searchTerm
  );

  useEffect(() => {
    setVideoList(remoteVideoList);
  }, [remoteVideoList]);

  return (
    <List>
      {videoList.map(
        ({ id, snippet }) =>
          id &&
          snippet && (
            <VideoCard
              key={id.videoId}
              thumbnail={snippet && snippet.thumbnails.medium.url}
              title={snippet && snippet.title}
              description={snippet && snippet.description}
              videoId={id.videoId}
            />
          )
      )}
    </List>
  );
};

export default VideoList;
