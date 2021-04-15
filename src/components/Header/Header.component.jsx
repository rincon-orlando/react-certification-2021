import React, { useContext } from 'react';
import { Button, Search, RightHolder, StyledLink, UserAvatar } from './Header.styles';
import AppContext from '../../providers/AppContext';
import { useHistory, useLocation } from 'react-router-dom';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import { FaUserSecret as User } from 'react-icons/fa';
import {
  REDUCER_SEARCH_ACTION,
  REDUCER_TOGGLE_THEME_ACTION,
  REDUCER_LOGOUT_ACTION,
} from '../../utils/constants';

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
    dispatch({ type: REDUCER_SEARCH_ACTION, payload: searchTerm });
  };

  return (
    <div style={{ height: '40px' }}>
      <Search
        darkTheme={state.darkTheme}
        defaultValue={state.searchTerm}
        placeholder="Type something cool"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            updateSearchTerm(e.target.value);
          }
        }}
      />
      <RightHolder>
        <Button
          darkTheme={state.darkTheme}
          onClick={() => dispatch({ type: REDUCER_TOGGLE_THEME_ACTION })}
        >
          {state.darkTheme ? <Sun /> : <Moon />}
        </Button>

        {/* TODO: Move the login/logout actions to a popup instead directly dispatching here. */}
        {state.authenticated ? (
          <Button
            darkTheme={state.darkTheme}
            onClick={() => dispatch({ type: REDUCER_LOGOUT_ACTION })}
          >
            <UserAvatar src={state.currentUser.avatarUrl} />
          </Button>
        ) : (
          <StyledLink
            to={{
              pathname: '/login',
              state: { background: location },
            }}
          >
            <Button darkTheme={state.darkTheme}>
              <User />
            </Button>
          </StyledLink>
        )}
      </RightHolder>
    </div>
  );
};

export default Header;
