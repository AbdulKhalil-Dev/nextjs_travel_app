import React from "react";
import { navLinks } from "../../constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 transition duration-500 z-[1002] bg-black opacity-70 w-full h-screen ${showNav ? "block" : "hidden"}`}
      />
      {/* navLinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050] lg:hidden`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-rose-400 sm:text-[30px] hover:scale-[1.02]'>
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* close button */}
        <CgClose
          onClick={closeNav}
          className='absolute top-3 right-5 w-6 h-6 sm:w-8 sm:h-8 p-1 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-90 hover:bg-white/10 hover:text-rose-300'
        />
      </div>
    </div>
  );
};

export default MobileNav;
