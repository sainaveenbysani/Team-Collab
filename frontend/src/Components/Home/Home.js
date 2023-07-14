import React from 'react';
import './Home.css';
import AppIcon from './AppLogo.png';
//import Login from '..Login/Login.js';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homepage">
        <Logo />
        <AppDescription />
      </div>
      <Footer />
      
    </div>
  );
};

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>TEAM COLLAB</h1>
//       <nav>
//         <ul>
//           <li>About</li>
//           <li>Login</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };
const Header = () => {
  return (
    <header className="header">
      <h1>Team Collab</h1>
      <nav>
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
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
      <h1>Welcome to the Team Collab</h1>
      <p>
        Team Collab is a one-time solution that powers collaboration across all teams from the client to the end customer during the process of delivering high-quality output.
        It helps in segregating & assigning the whole work among individuals in the team.
        This powerful app also helps in tracking the status of tasks assigned over a period.
        Additionally, it has a feature to approve the task once it is completed by the respective team member.
        It has more features like team status, project status, individual status to track the tasks more closely.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Team Collab. All rights reserved.</p>
    </footer>
  );
};

export default Home;
