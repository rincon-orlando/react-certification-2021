import React, { useState, useEffect, useContext } from 'react';
import { List } from './VideoList.styles';
import VideoCard from '../VideoCard';
import useYouTubeSearchApi from '../../utils/hooks/youtube-api';
import AppContext from '../../providers/AppContext';

const VideoList = ({ searchTerm, onClickVideoHandler }) => {
  const [videoList, setVideoList] = useState([]);
  // TODO: Do something meaningful while loading
  const { youTubeKey } = useContext(AppContext);
  const [isLoading, remoteVideoList] = useYouTubeSearchApi(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${youTubeKey}`,
    searchTerm
  );

  useEffect(() => {
    setVideoList(remoteVideoList);
  }, [remoteVideoList]);

  return (
    <List>
      {videoList.map(({ id, snippet }) => (
        <VideoCard
          key={id.videoId}
          thumbnail={snippet.thumbnails.medium.url}
          title={snippet.title}
          description={snippet.description}
          onClickVideoHandler={onClickVideoHandler}
          videoId={id.videoId}
        />
      ))}
    </List>
  );
};

export default VideoList;
