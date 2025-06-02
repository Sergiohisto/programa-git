import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="w-full py-2 xl:py-[12px] bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-4 lg:justify-between">
          <Logo />
          <div className="flex items-center gap-12">
            <Nav
              ontainerStyles="hidden xl:flex"
              listStyles="flex gap-4"
              linkStyles="text-black text-lg tracking-[1.4px]transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
