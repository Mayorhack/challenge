import React from "react";
import { RiVisaLine, RiMastercardLine } from "react-icons/ri";
import { SiBitcoin } from "react-icons/si";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assests/Logo.svg";
import "animate.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="quick_links">
          <h4>Quick Link</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="resources">
          <h4>Resources</h4>
          <ul>
            <li>Download Whitepapper </li>
            <li>Smart Token</li>
            <li>Blockchain Explorer</li>
            <li>Crypto API</li>
            <li>Interest</li>
          </ul>
        </div>
        <div className="payment">
          <h2>We accept following payment systems</h2>
          <div className="payment_icons">
            <div className="icons">
              <RiVisaLine size={"32px"} color={"#ffffff"} />
            </div>
            <div className="icons">
              <RiMastercardLine size={"32px"} />
            </div>
            <div className="icons">
              <SiBitcoin size={"32px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2021 CRAPPO. All rights reserved</p>
        <div className="icons">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
