import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Icon } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import { selectMenuItems } from '../../slices/sidebarSlice';
import './Sidebar.scss';
import { AccessToken } from '../../recoil/atom';
import Io5Icon from '../icon/Io5Icon';
import axios from '../../api/axios';

const SideBar = () => {
  const [drawerPos, setDrawerPos] = useState(false);
  const setAccessToken = useSetRecoilState(AccessToken);
  const navigate = useNavigate();
  const location = useLocation();
  // const items = useSelector(selectMenuItems);

  const handleDrawer = () => {
    setDrawerPos(!drawerPos);
  };

  const logoutHandler = async () => {
    await axios
      .post('/auth/logout')
      .then(() => {
        setAccessToken(null);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
    // TODO: ADD error handling
  };

  const clickMenuItemHandlerConstructor = (path) => {
    return () => {
      navigate(location.state?.from?.pathname || path, {
        replace: true
      });
    };
  };

  const sidebarClass = [];
  if (drawerPos) {
    sidebarClass.push('sidebar_max');
  }
  sidebarClass.push('sidebar');

  return (
    <div className={sidebarClass.join(' ')}>
      <div className="top_part">
        <div className="sidebar_drawer_icon" onClick={handleDrawer} role="button" tabIndex="0">
          <Io5Icon name="IoMenu" />
        </div>
      </div>
      <div className="middle_part">
        <ul>
          <li>
            <div role="button" tabIndex="0" onClick={clickMenuItemHandlerConstructor('events2')}>
              <Io5Icon name="IoEaselOutline" />
              <span>Events</span>
            </div>
          </li>
          <li>
            <div role="button" tabIndex="0" onClick={clickMenuItemHandlerConstructor('events2')}>
              <Io5Icon name="IoPeopleOutline" />
              <span>Users</span>
            </div>
          </li>
          <li>
            <div role="button" tabIndex="0" onClick={logoutHandler}>
              <Io5Icon name="IoExitOutline" />
              <span>Deconnect</span>
            </div>
          </li>
          {/* {items.map((item) => (
            <li key={item.title}>
              <Link to={item.link}>
                <Icon>{item.icon}</Icon>
                <span>{item.title}</span>
              </Link>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
