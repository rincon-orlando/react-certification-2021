import React, { useReducer, useEffect } from 'react';
import { YOUTUBE_KEY } from '../../utils/constants';
import { useHistory } from 'react-router-dom';
import YouTubeAppReducer from '../../state/YouTubeAppReducer';
import {
  REDUCER_SELECT_VIDEO_ACTION,
  REDUCER_LOAD_FROM_STORAGE_ACTION,
} from '../../utils/constants';

const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const history = useHistory();

  // I tried to make this action (that is common to two different components), part
  // of the dispatch 'select-video' to avoid having to transfer it in the context, but
  // I got an error because of usage of another hook (useHistory).
  // In the end I decided to make this state-independent and just return it outside of the
  // state/dispatch pair
  const navigateToVideoDetails = (videoId, title, description) => {
    dispatch({
      type: REDUCER_SELECT_VIDEO_ACTION,
      payload: {
        videoId: videoId,
        title: title,
        description: description,
      },
    });

    console.debug(`Navigate to video details ${videoId}`);

    history.push(`/${videoId}`);
  };

  const [state, dispatch] = useReducer(YouTubeAppReducer, {
    searchTerm: 'wizeline',
    currentVideo: {
      videoId: '',
      title: '',
      description: '',
    },
    youTubeKey: YOUTUBE_KEY,
    returnMockedResults: false,
    darkTheme: false,
    currentUser: null,
    authenticated: false,
    favoriteVideos: [],
  });

  // Force an initial load from the local storage
  useEffect(() => {
    dispatch({ type: REDUCER_LOAD_FROM_STORAGE_ACTION });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, navigateToVideoDetails }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
