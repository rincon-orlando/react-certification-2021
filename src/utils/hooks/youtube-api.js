import { useState, useEffect, useContext } from 'react';
import { getVisibleVideos } from '../videos';
import mockedData from '../../utils/mocked-youtube.json';
import AppContext from '../../providers/AppContext';

const useYouTubeSearchApi = (url, dependency) => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const { returnMockedResults } = useContext(AppContext);

  const fetchData = async () => {
    console.debug(`Fetching YouTube API: ${url}`);
    setIsLoading(true);
    try {
      let items = mockedData.items;
      if (!returnMockedResults) {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        items = jsonResponse.items;
      }
      const parsedVideoList = getVisibleVideos(items, 'videos');
      setVideoList(parsedVideoList);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dependency]);
  return [isLoading, videoList];
};

export default useYouTubeSearchApi;
