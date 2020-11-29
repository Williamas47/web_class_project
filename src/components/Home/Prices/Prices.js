import React from "react";
import { MyPrices } from "./PricesStyles";
import SvgIcons from "../../SvgIcons";
import { Link } from "react-router-dom";
// import { Starter, Pro, Lifelong } from "../../svg/SvgIcons";
 
export const plans = [
  {
    title: "Starter",
    details: [
      "Consetetur sadipscing elitr",
      "Sed diam nonumy eirmod tempor",
      "Invidunt ut labore et dolore magna",
      "Learn:",
    ],
    lenguages: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Adobe Photoshop",
      "Bootstrap",
      "Sass",
      //   "UI-UX",
    ],
    price: "25,00",
  },
  {
    title: "Pro",
    details: [
      "Consetetur sadipscing elitr",
      "Sed diam nonumy eirmod tempor",
      "Invidunt ut labore et dolore magna",
      "All content from Starter",
      "Learn:",
    ],
    lenguages: [
      "NPM",
      "Git",
      "Webpack",
      "EsLint",
      "React",
      "Redux",
      //  "Jest"
    ],
    price: "50,00",
  },
  {
    title: "Lifelong",
    details: [
      "Consetetur sadipscing elitr",
      "Sed diam nonumy eirmod tempor",
      "Invidunt ut labore et dolore magna",
      "All content from Pro",
      "Learn:",
    ],
    lenguages: [
      "Nodejs",
      "TypeScript",
      "ExpressJS",
      "MongoDB",
      "Firebase",
      "Apollo",
      //   "GraphQL",
    ],
    price: "75,00",
  },
];
// console.log(`../../img/Icons/${plans[0].lenguages[0]}.png`);

const Prices = () => {
  return (
    <MyPrices className="container" id="Prices">
      <h2>Prices</h2>
      <div id="content">
        {plans.map((content, index) => {
          return (
            <div className="item" key={index}>
              <SvgIcons icon={content.title} />
              <h3>{content.title}</h3>
              <ul className="details">
                {content.details.map((detail, index) => {
                  return <li key={index}>- {detail}</li>;
                })}
              </ul>
              <ul className="lenguages">
                {content.lenguages.map((lenguage, index) => {
                  return (
                    <li key={index}>
                      <img
                        src={require(`../../../img/Icons/${lenguage}.png`)}
                        alt={lenguage}
                        title={lenguage}
                      />
                    </li>
                  );
                })}
              </ul>
              <div id="preco">
                <span>$</span>
                <h3>{content.price}</h3>
                <p>/month</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/login">
        <button className="proceedBtn">Proceed</button>
      </Link>
    </MyPrices>
  );
};

export default Prices;
