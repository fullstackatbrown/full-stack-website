import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 drop-shadow-md">
      <div className="text-black">
        <Link href="/">
            This is a link
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
