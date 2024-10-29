import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

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
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/EstebanPastor",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 3,
    child: (
      <>
        Email <FiMail size={30} />
      </>
    ),
    href: "estebanandrespastor@gmail.com",
    style: "rounded-br-md",
  },
];
