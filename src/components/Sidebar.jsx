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
      <a href="Currículo Calebe Novembro 2022.pdf" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
