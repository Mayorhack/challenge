import React from "react";
import chart from "../assests/Chart.png";
import stat from "../assests/Statistic.svg";
import table from "../assests/Table.svg";
import Button from "../Components/Button";
import Card from "../Components/Card";
import { useInView } from "react-intersection-observer";
import { AttentionSeeker, Slide, Zoom } from "react-awesome-reveal";

const Portfolio = () => {
  const { ref, inView, entry } = useInView({
    root: null,
    rootMargin: "-300px 0px -300px 0px",
    threshold: 0,
  });
  console.log(entry);
  return (
    <>
      <div className="portfolio">
        <div className="">
          <AttentionSeeker effect="headShake">
            <h2>
              Market sentiments, portfolio, and run the infrastructure of your
              choice
            </h2>
          </AttentionSeeker>

          <div className="details" ref={ref}>
            {[
              {
                title: "Invest Smart",
                p: "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. ",
                picture: chart,
                id: 1,
              },
              {
                title: "Detailed Statistics",
                p: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in. ",
                picture: stat,
                id: 2,
              },
              {
                title: "Grow your profit and track your investments",
                p: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments. ",
                picture: table,
                id: 3,
              },
            ].map((item) => {
              return (
                <div className="portfolio_flex container" key={item.id}>
                  <Slide direction="right">
                    <div className={"portfolio_text"}>
                      <h3>{item.title}</h3>
                      <p>{item.p}</p>
                      <Button text="Learn more" />
                    </div>
                  </Slide>
                  <Slide>
                    <div
                      className={
                        inView
                          ? "portfolio_image  translate-X"
                          : "portfolio_image"
                      }
                    >
                      <img src={item.picture} alt="" />
                    </div>
                  </Slide>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="subscribe">
        <Zoom>
          <Card
            children={
              <>
                <div className="subscribe_flex">
                  <div className="subscribe_text">
                    <h3>Start mining now</h3>
                    <p>
                      Join now with CRAPPO to get the latest news and start
                      mining now
                    </p>
                  </div>
                  <input type="text" placeholder="Enter your email" />
                  <Button text="Subscribe" />
                </div>
              </>
            }
          />
        </Zoom>
      </div>
    </>
  );
};

export default Portfolio;
