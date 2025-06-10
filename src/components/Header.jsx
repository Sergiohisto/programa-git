import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="w-full py-2 xl:py-[12px] bg-green-900">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-4 lg:justify-between">
          <Logo />
          <div className="flex items-center border-white border rounded-3xl border-opacity-10">
            <Nav
              containerStyles="flex"
              listStyles="flex gap-1 p-1 rounded-3xl bg-white bg-opacity-20 text-white text-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
