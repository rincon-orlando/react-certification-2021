import {
  REDUCER_SEARCH_ACTION,
  REDUCER_SELECT_VIDEO_ACTION,
  REDUCER_TOGGLE_THEME_ACTION,
  REDUCER_LOGIN_ACTION,
  REDUCER_LOGOUT_ACTION,
  REDUCER_LOAD_FROM_STORAGE_ACTION,
  REDUCER_ADD_TO_FAVORITES_ACTION,
  REDUCER_REMOVE_FROM_FAVORITES_ACTION,
} from '../utils/constants';

const YouTubeAppReducer = (state, action) => {
  let favs;
  switch (action.type) {
    case REDUCER_SEARCH_ACTION:
      return { ...state, searchTerm: action.payload };
    case REDUCER_SELECT_VIDEO_ACTION:
      return { ...state, currentVideo: action.payload };
    case REDUCER_TOGGLE_THEME_ACTION:
      return { ...state, darkTheme: !state.darkTheme };
    case REDUCER_LOGIN_ACTION:
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload, authenticated: true };
    case REDUCER_LOGOUT_ACTION:
      localStorage.removeItem('currentUser');
      return { ...state, currentUser: null, authenticated: false };
    case REDUCER_ADD_TO_FAVORITES_ACTION:
      console.debug(`Add to favorites ${action.payload}`);
      favs = localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : [];
      favs.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(favs));
      return { ...state, favoriteVideos: favs };
    case REDUCER_REMOVE_FROM_FAVORITES_ACTION:
      console.debug(`Remove from favorites ${action.payload}`);
      favs = localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : [];
      const index = favs.indexOf(action.payload);
      if (index > -1) favs.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favs));
      return { ...state, favoriteVideos: favs };
    case REDUCER_LOAD_FROM_STORAGE_ACTION:
      return {
        ...state,
        currentUser: localStorage.getItem('currentUser')
          ? JSON.parse(localStorage.getItem('currentUser'))
          : null,
        authenticated: localStorage.getItem('currentUser') ? true : false,
        favoriteVideos: localStorage.getItem('favorites')
          ? JSON.parse(localStorage.getItem('favorites'))
          : null,
      };
    default:
      throw Error(`Unsupported state: ${state.action}`);
  }
};

export default YouTubeAppReducer;
