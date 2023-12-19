'use client'

import { CircleUserRound, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePathname } from "next/navigation";

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

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="w-full  h-12 mx-auto items-center justify-between px-4 sm:px-10 lg:px-20 flex">
      <div className="flex items-center">
        <Link href="/lobby">
          <Image
            src="/images/logo.png"
            width={200}
            height={54}
            alt="Logo"
            priority
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="lg:flex gap-x-6 hidden">
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
        <MobileMenu />
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-transparent rounded-sm">
            <CircleUserRound className="text-white w-8 h-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36 md:w-40 lg:w-44">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
      </div>
    </div>
  );
};

export default Navbar;
