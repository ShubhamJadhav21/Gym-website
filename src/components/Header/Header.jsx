import React, { useState, useEffect } from 'react';
import { Nav } from '../../Data/Data';
import style from './Header.module.css';
import { Link as ScrollLink } from 'react-scroll';
import MyModal from '../Modal/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('');
  const [showLogout, setShowLogout] = useState(false);

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('users');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setUser(parsedUser[0].name);
    }
  }, []);

  const handleOpenModal = () => {
    setShow(true);
  };

  const handleAccountClick = () => {
    setShowLogout((prevState) => !prevState);
  };

  return (
    <div className={style.navigation_container}>
      <ScrollLink
        activeClass={style.active}
        to={Nav[0].path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={100}
        className={style.left_nav}
      >
        {Nav[0].name}
      </ScrollLink>

      <div className={style.center_nav}>
        {Nav.slice(1).map((list, index) => (
          <nav key={index} className={style.nav_list}>
            <ScrollLink
              activeClass={style.active}
              to={list.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              {list.name}
            </ScrollLink>
          </nav>
        ))}
      </div>

      <div className={style.wrapper_userInfo}>
        {showLogout && (
          <div className={style.logout}>
            <span onClick={logout}><LogoutIcon/>Logout</span>
          </div>
        )}

        {user ? (
          <div className={style.user_name}>
            {user}
            <span>
              <AccountCircleIcon onClick={handleAccountClick} />
            </span>
          </div>
        ) : (
          <button className={style.joinus_btn} onClick={handleOpenModal}>
            Join Us
          </button>
        )}
      </div>

      <MyModal open={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default Header;
