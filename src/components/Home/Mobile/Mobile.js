import React from "react";
import { MySection } from "./MobileStyles";
const Mobile = () => {
  return (
    <MySection id="Mobile">
      <div className="content container">
        <h1>Study Wherever you want</h1>
        <p>
          Our platform have 100% support for mobile devices. Counting with more
          than 280.000 downloads. For Androind and IOS.
        </p>
        <button onClick={()=> alert("Aplicativo em Breve!")}>Download App</button>
      </div>
      {/* <img src={iphone} /> */}
    </MySection>
  );
};

export default Mobile;
