import React, { useContext } from 'react';
import { Button, Search, RightHolder } from './Header.styles';
import AppContext from '../../providers/AppContext';
import { useHistory, useLocation } from 'react-router-dom';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import { FaUserSecret as User, FaHamburger as BurgerIcon } from 'react-icons/fa';

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
      <Button darkTheme={state.darkTheme}>
        <BurgerIcon />
      </Button>
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
          onClick={() => dispatch({ type: 'toggle-theme' })}
        >
          {state.darkTheme ? <Sun /> : <Moon />}
        </Button>
        <Button darkTheme={state.darkTheme}>
          <User />
        </Button>
      </RightHolder>
    </>
  );
};

export default Header;
