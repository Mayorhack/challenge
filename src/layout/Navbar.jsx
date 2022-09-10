import React, { useState } from "react";
import logo from "../assests/Logo.svg";
import "animate.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = function (e) {
    e.target.closest(
      ".menu"
    ).previousElementSibling.dataset.visible = `${openMenu}`;
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="navigation">
      <nav data-visible={openMenu}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li className="account">
            <a href="" className="login">
              Login
            </a>
            <a href="" className="register">
              Register
            </a>
          </li>
          <li></li>
        </ul>
      </nav>
      <div
        className={openMenu ? "menu menu-open" : "menu"}
        onClick={handleClick}
      >
        <div className="first"></div>
        <div className="middle"></div>
        <div className="last"></div>
      </div>
      <a className="mobile-navigation-logo" href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Navbar;
