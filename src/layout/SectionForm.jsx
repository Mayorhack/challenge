import React from "react";
import Button from "../Components/Button";
import Card from "../Components/Card";
import bitcoin from "../assests/bitcoin.svg";
import Ethereum from "../assests/Ethereum.svg";
import Litecoin from "../assests/Litecoin.svg";

const SectionForm = () => {
  return (
    <div className="section_form">
      <div className="section_translate">
        <h2>Check how much you can earn</h2>
        <p className="text">
          Let's check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div className="formcard">
          <Card
            children={
              <>
                <form className="">
                  <input type="text" placeholder="Enter your hash rate" />
                  <select name="rate" id="rate">
                    <option value="TH/s">TH/s</option>
                    <option value="H/s">H/s</option>
                    <option value="KH/s">KH/s</option>
                    <option value="MH/s">MH/s</option>
                    <option value="GH/s">GH/s</option>
                  </select>
                  <Button text="Calculate" />
                </form>
                <p className="highlight">Enter your hash rate:</p>
                <h3>
                  0.055 130 59 ETH <span>($1275)</span>
                </h3>
                <p style={{ color: "#828282", textAlign: "start" }}>
                  Revenue will change based on mining difficulty and Ethereum
                  price.
                </p>
              </>
            }
          />
        </div>
        <h2>Trade securely and market the high growth cryptocurrencies.</h2>
        <div className="cards">
          {[
            {
              title: "Bitcoin",
              sym: "BTC",
              icon: bitcoin,
              p: "Digital currency in which a record of transactions is maintained.",
            },
            {
              title: "Ethereum",
              sym: "ETH",
              icon: Ethereum,
              p: "Blockchain technology to create and run decentralized digital applications.",
            },
            {
              title: "Litecoin",
              sym: "LTC",
              icon: Litecoin,
              p: "Cryptocurrency that enables instant payments to anyone in the world.",
            },
          ].map((item) => {
            return (
              <Card
                children={
                  <>
                    <img src={item.icon} alt={item.title} />
                    <h3>
                      {item.title} <span>{item.sym}</span>
                    </h3>
                    <p>{item.p}</p>
                    <Button logo=">" />
                  </>
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
