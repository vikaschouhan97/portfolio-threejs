import { FaLinkedin, FaGithubSquare, FaInstagramSquare  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between items-center my-10 px-4">
      <p className="text-white-500">Copyright © 2025 Vikas Chouhan</p>
      <div className="text-white flex gap-3">
        <a href="https://www.linkedin.com/in/vikas-chouhan-646403121/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={25}/>
        </a>
        <a href="https://github.com/vikaschouhan97" target="_blank" rel="noopener noreferrer">
        <FaGithubSquare size={25}  />
        </a>
        <a href="https://x.com/VikasChouhan97" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter size={25} />
        </a>
        <a href="https://www.instagram.com/vikas_chouhan_97_99/" target="_blank" rel="noopener noreferrer">
        <FaInstagramSquare size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
