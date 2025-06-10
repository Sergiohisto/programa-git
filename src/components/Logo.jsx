import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="font-bold text-2xl text-white">
      Orion<span className="text-green-500">/Gym</span>
    </Link>
  );
}

export default Logo;
