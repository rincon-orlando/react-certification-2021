import React, { useState } from 'react';
import { YOUTUBE_KEY } from '../../utils/constants';
import { useHistory } from 'react-router-dom';

const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const history = useHistory();
  const [selectedVideoId, setSelectedVideoId] = useState('');
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');
  const [selectedVideoDescription, setSelectedVideoDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('wizeline');

  const navigateToVideoDetails = (videoId, title, description) => {
    console.debug(`Navigate to video details ${videoId}`);

    // Update context
    setSelectedVideoId(videoId);
    setSelectedVideoTitle(title);
    setSelectedVideoDescription(description);

    history.push(`/${videoId}`);
  };

  return (
    <AppContext.Provider
      value={{
        selectedVideoId,
        selectedVideoTitle,
        selectedVideoDescription,
        searchTerm,
        setSearchTerm,
        navigateToVideoDetails,
        youTubeKey: YOUTUBE_KEY,
        returnMockedResults: true,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
