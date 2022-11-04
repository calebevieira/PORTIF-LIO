import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, text_link:"https://www.linkedin.com/in/calebe-vieira-91aa52185/" },
  { name: "github", icon: <FaGithub />, text_link:"https://github.com/calebevieira"},
  { name: "instagram", icon: <FaInstagram />, text_link:"https://www.instagram.com/calebevieira1998/" },
  
];

const SocialNetworkContainer = () => {
  return ( <section id="social-networks">
      {socialNetworks.map((network)=> (
        <a href={network.text_link} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworkContainer;
