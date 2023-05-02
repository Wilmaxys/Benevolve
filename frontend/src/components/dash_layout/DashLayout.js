import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/Sidebar';

// TODO: ADD notifications handling

const DashLayout = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="main">
        <div className="header">
          <div className="left">Kampus</div>
          <div className="right">Test</div>
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
