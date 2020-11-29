import styled from "styled-components";
import MyNotebookIntro from "../../../img/notebook07.jpg";
import MyNotebookIntro2 from "../../../img/notebook05.jpg";
// import Myimage from "../../img/experimental04.png";
export const MyIntro = styled.section`
  @media (max-width: 600px) {
    height: 92vh;
    height: 450px;
    background: black;
    h1 {
      padding-top: 80px;
      text-align: center;
      margin: 0 auto;
    }
    p {
      margin: 0 auto;
      text-align: center;
    }
  }
  @media (min-width: 600px) and (max-width: 859px) {
    background: black;
    background: url(${MyNotebookIntro2});
    background-size: 100%;
    background-repeat: no-repeat;
    /* background-position: center 140%; */
    background-position: center 270px;
    height: 525px;
    h1 {
      padding-top: 80px;
      text-align: center;
      margin: 0 auto;
    }
    p {
      margin: 0 auto;
      text-align: center;
    }
  }
  @media (min-width: 860px) and (max-width: 1000px) {
    height: 92vh;
    /* background: blue; */
    /* background-position: -45% -100%; */
    background-size: 120%;
    h1 {
      padding-top: 110px; /* mudar */
    }
    /* h1 {
      width: 80%;
      text-align: center;
      margin: 0 auto;
    }
    p {
      margin-left: 0;
      margin: 0 auto;
      text-align: center;
    } */
  }
  @media (min-width: 1000px) {
    h1 {
      padding-top: 110px;
    }
    p {
      margin-left: 10px;
    }
  }
  /* height: 100vh; */
  height: 92vh;
  /* background: black; */
  background-image: url(${MyNotebookIntro});
  background-size: 120%;
  /* background-position-x: 150%; */
  /* background-position-x: 170%; */
  /* background-position-y: 90%; */
  background-position: right center;
  background-repeat: no-repeat;
  /* background-size: 50px; */
  h1 {
    padding-bottom: 50px;
    width: 450px;
    /* width: 40%; */
    font-size: 3em;
  }
  p {
    width: 440px;
    &:before {
      content: "";
      position: absolute;
      left: -10px;
      top: -10px;
      width: 15px;
      height: 15px;
      /* background: green; */
      border-top: 3px solid #d2ff00;
      border-left: 3px solid #d2ff00;
    }
    &:after {
      content: "";
      position: absolute;
      right: -10px;
      bottom: -10px;
      width: 15px;
      height: 15px;
      /* background: green; */
      border-bottom: 3px solid #d2ff00;
      border-right: 3px solid #d2ff00;
    }
  }
`;

// export const MyTitle = styled.h2`
//   padding-top: 110px;
//   padding-bottom: 50px;
//   width: 450px;
//   font-size: 48px;
// `;

// export const MyParagraph = styled.p`
//   width: 440px;
//   margin-left: 10px;
//   &:before {
//     content: "";
//     position: absolute;
//     left: -10px;
//     top: -10px;
//     width: 15px;
//     height: 15px;
//     /* background: green; */
//     border-top: 3px solid #d2ff00;
//     border-left: 3px solid #d2ff00;
//   }
//   &:after {
//     content: "";
//     position: absolute;
//     right: -10px;
//     bottom: -10px;
//     width: 15px;
//     height: 15px;
//     /* background: green; */
//     border-bottom: 3px solid #d2ff00;
//     border-right: 3px solid #d2ff00;
//   }
// `;
