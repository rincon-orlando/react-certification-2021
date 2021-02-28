import React from 'react';
import { List } from './VideoList.styles';
import VideoCard from '../VideoCard';
import { getVisibleVideos } from '../../utils/videos';

const VideoList = ({ title, items, filter }) => {
  const visibleItems = getVisibleVideos(items, filter);

  return (
    <List>
      {visibleItems.map(({ id, snippet }) => (
        <VideoCard
          thumbnail={snippet.thumbnails.medium.url}
          key={id.videoId}
          title={snippet.title}
          body={snippet.description}
        />
      ))}
    </List>
  );
};

export default VideoList;
