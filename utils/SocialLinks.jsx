import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export const Sociallinks = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/estebanandrespastor/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/EstebanPastor",
  },
  {
    id: 3,
    child: (
      <>
        WhatsApp <FiPhone size={30} />
      </>
    ),
    href: "https://api.whatsapp.com/send?phone=5493413629615&text=%C2%A1Contactate%20conmigo!",
  },
];
