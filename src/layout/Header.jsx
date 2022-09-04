import React from "react";
import Button from "../Components/Button";
import headerImage from "../assests/Illustration.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_text">
        <div className="save">
          <p className="text_save">75% SAVE</p>
          <p>For the Black Friday weekend</p>
        </div>
        <h2>Fastest & secure platform to invest in crypto</h2>
        <p className="billion">
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions.
        </p>
        <Button text="Try for FREE" logo=">" />
      </div>
      <div className="header_image">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
