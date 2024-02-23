"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import navBarLinks from "@constants/NavbarLinks";
import socials from "@constants/Socials";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Header = () => {
  const pathname = usePathname();
  const logo =
    "https://res.cloudinary.com/dbpb6wt0d/image/upload/v1708607759/logo-Photoroom.png-Photoroom_1_ogl2co.png";

  const isLinkActive = (href: string) => pathname === href;

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="links">
          <NavigationMenu>
            <NavigationMenuList>
              {navBarLinks.map((link) => (
                <NavigationMenuItem key={link.id}>
                  {link.subLinks && link.subLinks.length > 0 ? (
                    <>
                      <NavigationMenuTrigger>
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul
                          className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-right"
                          dir="rtl"
                        >
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.id}>
                              <NavigationMenuLink
                                href={subLink.href}
                                active={isLinkActive(subLink.href)}
                                className={navigationMenuTriggerStyle()}
                              >
                                {subLink.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={link.href}
                      active={isLinkActive(link.href)}
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="socials">
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
