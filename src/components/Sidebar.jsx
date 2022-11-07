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
      <a href="https://drive.google.com/file/d/1eCq4ysZhhsr_KzJzmdstd55khEF8xKn5/view?usp=share_link" className="btn" download>Baixar currículo</a>
    </aside>
  );
};

export default Sidebar;
