const YouTubeAppReducer = (state, action) => {
  switch (action.type) {
    case 'search':
      return { ...state, searchTerm: action.payload };
    case 'select-video':
      return { ...state, currentVideo: action.payload };
    case 'toggle-theme':
      return { ...state, darkTheme: !state.darkTheme };
    default:
      throw Error(`Unsupported state: ${state.action}`);
  }
};

export default YouTubeAppReducer;
