import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar.jsx';
// import Footer from "../components/Footer.jsx";

const LandingLayout = ({ Page, ...rest }) => {
  let { className } = rest;

  return (
    <div className={`v2 landing-layout__container ${className}`}>
      <NavBar />
      {Page && <Page />}
      <Outlet />
    </div>
  );
};

export default LandingLayout;
