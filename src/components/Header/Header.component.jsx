import React, { useContext } from 'react';
import {
  BurgerButton,
  Search,
  RightHolder,
  ToggleButton,
  ProfileButton,
} from './Header.styles';
import AppContext from '../../providers/AppContext';
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory();
  const location = useLocation();

  const updateSearchTerm = (searchTerm) => {
    console.debug(`Updated search term ${searchTerm}`);
    if (location.pathname !== '/') {
      // We were somewhere else, move back to home page with updated query
      console.debug('Navigating to home page');
      history.push('/');
    }
    dispatch({ type: 'search', payload: searchTerm });
  };

  return (
    <>
      <BurgerButton
        type="image"
        src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
        alt=""
      />
      <Search
        defaultValue={state.searchTerm}
        placeholder="Type something cool"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            updateSearchTerm(e.target.value);
          }
        }}
      />
      <RightHolder>
        <ToggleButton id="darkMode" type="checkbox" />
        <span>Dark Mode</span>
        <ProfileButton
          type="image"
          src="https://img2.freepng.es/20180422/wee/kisspng-computer-icons-user-profile-login-clip-art-my-account-icon-5adc5dd8d9ca10.9425519815243913848921.jpg"
          alt=""
        />
      </RightHolder>
    </>
  );
};

export default Header;
