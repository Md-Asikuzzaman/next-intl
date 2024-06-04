import Link from "next/link";
import React from "react";
import LocalSwither from "./LocalSwither";

const Header = () => {

  return (
    <header className="flex items-center justify-between py-5">
      <nav>
        <ul className="flex items-center gap-12">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>

          <li>
            <Link href={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <LocalSwither />
    </header>
  );
};

export default Header;
