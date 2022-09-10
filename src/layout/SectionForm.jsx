import React, { useState } from "react";
import Button from "../Components/Button";
import Card from "../Components/Card";
import bitcoin from "../assests/bitcoin.svg";
import Ethereum from "../assests/Ethereum.svg";
import Litecoin from "../assests/Litecoin.svg";

import { AttentionSeeker, Bounce, Zoom } from "react-awesome-reveal";

const SectionForm = () => {
  const [active, setactive] = useState({
    Bitcoin: false,
    Ethereum: false,
    Litecoin: false,
  });
  return (
    <div className="section_form">
      <div className="section_translate">
        <AttentionSeeker effect="jello">
          <h2>Check how much you can earn</h2>
        </AttentionSeeker>

        <p className="text">
          Let's check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Zoom>
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
        </Zoom>
        <Zoom>
          <h2 className="dark">
            Trade securely and market the high growth cryptocurrencies.
          </h2>
        </Zoom>

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
          ].map((item, id) => {
            return (
              <div
                data-active={item.title}
                className={active[item.title] ? ` Each new` : "Each"}
                onClick={(e) => {
                  setactive(() => {
                    const current = {
                      Bitcoin: false,
                      Ethereum: false,
                      Litecoin: false,
                    };
                    const mov = e.target.closest(".Each").dataset.active;
                    return { ...current, [mov]: true };
                  });
                }}
                key={id}
              >
                <Card
                  children={
                    <>
                      <img src={item.icon} alt={item.title} />
                      <h3>
                        {item.title} <span>{item.sym}</span>
                      </h3>
                      <p>{item.p}</p>
                      <Button
                        text={active[item.title] ? "Start mining" : null}
                        logo=">"
                      />
                    </>
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
