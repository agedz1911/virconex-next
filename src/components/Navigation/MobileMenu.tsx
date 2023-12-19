"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

interface linkProps {
  name: string;
  href: string;
}
const Links: linkProps[] = [
  { name: "Lobby", href: "/lobby" },
  { name: "Exhibition", href: "/exhibition" },
  { name: "Conference", href: "/conference" },
  { name: "Recorded Meeting", href: "/recorded" },
  { name: "E-Poster", href: "/e-poster" },
];

const MobileMenu = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <MenuIcon className="text-white lg:hidden mr-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-accent">
        <SheetHeader>
          <SheetTitle className="text-slate-200">Virconex InaPRAS</SheetTitle>
        </SheetHeader>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div>
                <ul className="space-y-2 mt-4">
                  {Links.map((link, i) => (
                    <div key={i}>
                      {pathName === link.href ? (
                        <li>
                          <Link
                            href={link.href}
                            className="text-yellow-600 font-semibold underline text-sm"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ) : (
                        <li>
                          <Link
                            href={link.href}
                            className="text-white font-normal text-sm"
                          >
                            {link.name}
                          </Link>
                        </li>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
