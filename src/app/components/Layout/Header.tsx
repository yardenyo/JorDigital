"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import socials from "@constants/Socials";
import NavigationMenu from "@components/Layout/NavigationMenu";

const Header = () => {
  const logo =
    "https://res.cloudinary.com/dbpb6wt0d/image/upload/v1708607759/logo-Photoroom.png-Photoroom_1_ogl2co.png";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <nav className="flex justify-between items-center p-4">
        <div className="links hidden lg:flex">
          <NavigationMenu />
        </div>
        <div className="flex lg:hidden">
          <Icon
            icon="ci:hamburger-md"
            className="text-3xl text-light hover:text-accent"
          />
        </div>
        <div className="socials hidden md:flex">
          <ul className="flex gap-4">
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  <Icon
                    icon={social.icon}
                    className="text-light text-xl hover:text-accent transition-all duration-400 ease-in-out"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="JorDigital" width={200} height={200} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
