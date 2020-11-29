import styled from "styled-components";
import mobileBgk from "../../../img/mobile.jpg";
export const MySection = styled.section`
  @media (max-width: 666px) {
    background-size: 100%;
    background-position: right 60%;
  }
  height: 100vh;
  background-image: url(${mobileBgk});
  background-size: 80%;
  background-position: right center;
  background-repeat: no-repeat;
  img {
    /* width: 100px; */
    /* height: 100px; */
    height: 60%;
    width: 30%;
    size: 50%;
    margin-left: 125px;
    transform: rotate(-25deg);
    transition: ease 1s;
    &:hover {
      filter: invert(1);
      transition: ease 1s;
    }
  }

  .content {
    padding-top: 80px;
    /* padding-top: px; */
    /* width: 450px; */
    h1 {
      padding-bottom: 10px;
      font-size: 3em;
    }
    p {
      width: 450px;
    }
    button {
      margin-top: 30px;
      height: 30px;
      width: 100px;
      border-radius: 5px;
      color: #121a13;
      background: #b3f700;
      /* color: black; */
      border: 0;
      padding: 5px;
      transition: ease 0.5s;
      &:hover {
        transform: scale(1.1);
        transition: ease 0.5s;
        background: #d2ff00;
        filter: invert(1);
        cursor: pointer;
        /* border: 3px solid #545454; */
        /* box-shadow: 3px 3px 0.5px white; */
      }
    }
  }
`;
export const MyContent = styled.div``;
