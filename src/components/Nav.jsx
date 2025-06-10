import React from "react";
import Link from "next/link";

const links = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Sobre Nosotros",
    href: "#",
  },
  {
    name: "Clientes",
    href: "/clientes",
  },
  {
    name: "Contacto",
    href: "#",
  },
];

const Nav = ({ containerStyles, linkStyles, listStyles }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => (
          <lu
            key={index}
            className="hover:bg-white hover:bg-opacity-30 transition duration-200 px-3 py-2 rounded-full"
          >
            <Link href={link.href} className={linkStyles}>
              {link.name}
            </Link>
          </lu>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
