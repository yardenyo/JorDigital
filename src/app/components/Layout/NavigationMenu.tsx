import React from "react";
import navBarLinks from "@constants/NavbarLinks";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

type Props = {};

const NavigationMenuComponent = (props: Props) => {
  const pathname = usePathname();

  const isLinkActive = (href: string) => pathname === href;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navBarLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            {link.subLinks && link.subLinks.length > 0 ? (
              <>
                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className="flex flex-col gap-2 text-lg text-light p-4 bg-dark rounded-md shadow-lg"
                    dir="rtl"
                  >
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.id}>
                        <NavigationMenuLink
                          href={subLink.href}
                          active={isLinkActive(subLink.href)}
                          className={` ${navigationMenuTriggerStyle()}`}
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
  );
};

export default NavigationMenuComponent;
