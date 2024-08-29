"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { PrimaryLogo } from "@/app/assets";
import { NAVIGATION } from "../../utils/constand";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="bg-[#11211F] border-b-1 p-5 mb-10">
      {/* Logo for the website */}
      <div className="max-w-[1240px] flex justify-between items-center mx-auto">
        <Image src={PrimaryLogo} alt="Logo" width={125} className="logo" />
        {/* Navigation Links for the website */}
        <nav className="flex gap-5">
          {NAVIGATION.map((nav, index) => (
            <Link
              key={index}
              href={nav.route}
              className={
                pathname === nav.route
                  ? "text-white font-bold"
                  : "text-gray-300 hover:text-white"
              }
            >
              {nav.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
