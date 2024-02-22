"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import navBarLinks from "@constants/NavbarLinks";
import socials from "@constants/Socials";

const Header = () => {
  const pathname = usePathname();
  const logo =
    "https://res.cloudinary.com/dbpb6wt0d/image/upload/v1708607759/logo-Photoroom.png-Photoroom_1_ogl2co.png";

  const isLinkActive = (href: string) => pathname === href;

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="links">
          <ul className="flex gap-4">
            {navBarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`${
                      isLinkActive(link.href) ? "text-accent" : "text-light"
                    } text-lg tracking-wider hover:text-accent transition-all duration-400 ease-in-out`}
                  >
                    <div className="title">{link.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="socials">
          <ul className="flex gap-4">
            {socials.map((social) => {
              return (
                <li key={social.id}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    <Icon
                      icon={social.icon}
                      className="text-light text-xl hover:text-accent transition-all duration-400 ease-in-out"
                    />
                  </a>
                </li>
              );
            })}
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
