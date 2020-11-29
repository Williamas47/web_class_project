import React from "react";
// import SvgIcons from "./FooterSvgIcons";
import SvgIcons from "../SvgIcons";
import { MyFooter } from "./FooterStyles";
const Footer = () => {
  return (
    <MyFooter>
      <p>All rights reserved ©</p>
      <div>
        <SvgIcons icon="Twitter" className="icons" />
        <SvgIcons icon="Facebook" className="icons" />
        <SvgIcons icon="Instagram" className="icons" />
      </div>
      {/* <p>Developed by <span style={{ color: "#00C41F" }}>WAS</span></p> */}
      {/* <div> */}
      {/* <a href="google.com"> */}
      {/* <SvgIcons icon="Linkedin" className="icons" /> */}
      {/* </a> */}
      {/* <span> | </span> */}
      {/* <SvgIcons icon="Github" className="icons" /> */}
      {/* </div> */}
    </MyFooter>
  );
};

export default Footer;
