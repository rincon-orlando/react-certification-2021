import React, { useState } from 'react';
import { YOUTUBE_KEY } from '../../utils/constants';

const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const [selectedVideoId, setSelectedVideoId] = useState('');
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');
  const [selectedVideoDescription, setSelectedVideoDescription] = useState('');
  const [youTubeKey] = useState(YOUTUBE_KEY);
  const [returnMockedResults] = useState(false);

  return (
    <AppContext.Provider
      value={{
        selectedVideoId,
        setSelectedVideoId,
        selectedVideoTitle,
        setSelectedVideoTitle,
        selectedVideoDescription,
        setSelectedVideoDescription,
        youTubeKey,
        returnMockedResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
