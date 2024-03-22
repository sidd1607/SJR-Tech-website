import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h1>SJR Tech</h1>
      <main>
        <a href={"/"}>Home</a>
        <a href={"/ConactUs"}>Contact</a>
        <a href={"/#about"}>About</a>
        <a href={"/#brands"}>Brands</a>
        <Link to={"/services"}>Services</Link>
        <a href={"/OurTeam"}>Our Team</a>
      </main>
    </nav>
  );
}

export default Header;
