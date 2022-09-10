import React from "react";
import Button from "../Components/Button";
import headerImage from "../assests/Illustration.svg";
import { useInView } from "react-intersection-observer";
import { Slide, Zoom } from "react-awesome-reveal";

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="header" ref={ref}>
      <Slide>
        <div className="header_text ">
          <div className="save">
            <p className={inView ? "text_save translate-X" : "text_save"}>
              75% SAVE
            </p>
            <p>For the Black Friday weekend</p>
          </div>
          <h2>Fastest & secure platform to invest in crypto</h2>
          <p className="billion">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <Button text="Try for FREE" logo=">" inView={inView} />
        </div>
      </Slide>
      <Zoom>
        <div className="header_image">
          <img src={headerImage} alt="" />
        </div>
      </Zoom>
    </div>
  );
};

export default Header;
