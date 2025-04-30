import React from "react";
import Link from "next/link";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "sobre Nosotros",
    href: "#",
  },
  {
    name: "Clientes",
    href: "/clientes",
  },
  {
    name: "contacto",
    href: "#",
  },
];

const Nav = ({ containerStyles, linkStyles, listStyles }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => (
          <lu key={index}>
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
