import React from 'react';
import './Home.css';
import AppIcon from './AppLogo.png';

const Home = () => {
  return (
    <div className="homepage">
      <Logo />
      <AppDescription />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <img src={AppIcon} alt="App Icon" />
    </div>
  );
};

const AppDescription = () => {
  return (
    <div className="app-description">
      <h1><strong>Welcome to the Team Collab</strong></h1>
      <p>
      Team Collab is a one-time solution that powers collaboration across all teams from Client to end customer during the process of delivering high quality output. 
      It helps in segregating & assigning the whole work among individuals in the team. 
      This powerful app also helps in tracking the status of tasks assigned over a period. 
      Additionally, it has a feature to Approve the task once it is completed by the respective team member. 
      It has more features like team status, project status, individual status to track the tasks more closely. 
      </p>
    </div>
  );
};

export default Home;
