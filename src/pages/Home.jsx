import React, { useState } from 'react';
import '../pages/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className="home">
      <div className="welcome-headcontent">
        <h1>WELCOME TO MY WEBSITE</h1>
        <h2>Nice to meet you, I'm Mingkun Li</h2>
        <Link to="/myProject" className="start">
          <p>Let's Start - &gt;</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
