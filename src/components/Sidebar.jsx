import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Calebe Vieira" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="/calebe.rar" className="btn" download>Baixar currículo</a>
    </aside>
  );
};

export default Sidebar;
