import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Calebe Vieira" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1OYsU-9VOBQ6QEUuC_r40ga02Yo4SVZgn/view?usp=sharing" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
