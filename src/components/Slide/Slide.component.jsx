import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import AppContext from '../../providers/AppContext';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    left: '2px',
    top: '2px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export default (props) => {
  const { state } = useContext(AppContext);

  return (
    // Pass on our props
    <Menu {...props} styles={styles}>
      <a className="menu-item" href="/">
        Home
      </a>
      {state.authenticated ? (
        <a className="menu-item" href="/favorites">
          Favorites
        </a>
      ) : (
        <></>
      )}
    </Menu>
  );
};
