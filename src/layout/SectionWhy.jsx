import React from "react";
import icon from "../assests/Icon.svg";
import icon1 from "../assests/Icon1.svg";
import icon2 from "../assests/Icon2.svg";
import Button from "../Components/Button";
import illustration from "../assests/Illustrations.svg";
import { useInView } from "react-intersection-observer";
import { Roll } from "react-awesome-reveal";

const SectionWhy = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "-100px",
    threshold: 0,
  });

  return (
    <div className="section_why" ref={ref}>
      <div className="numbers">
        {[
          { title: "$30B", logo: icon, p: "Digital Currency Exchanged", id: 0 },
          { title: "10M+", logo: icon1, p: "Trusted Wallets Investor", id: 1 },
          { title: "195", logo: icon2, p: "Countries Supported", id: 2 },
        ].map((item) => {
          let clas = "name";

          if (!item.id) clas = "number translateX";
          else if (item.id === 2) clas = "number translate-X";
          else clas = "number resize";
          return (
            <div className={inView ? clas : "number"} key={item.id}>
              <img src={item.logo} alt="" />
              <div className="text">
                <h2>{item.title}</h2>
                <p>{item.p}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="section_flex">
        <Roll>
          <div className={inView ? "section_why_image" : "section_why_image"}>
            <img src={illustration} alt="" />
          </div>
        </Roll>

        <div
          className={
            inView ? "section_why_text  translate-X" : "section_why_text"
          }
        >
          <h2>Why you should choose CRAPPO</h2>
          <p>
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default SectionWhy;
