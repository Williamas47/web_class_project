import styled from "styled-components";
// import { depo1, depo2, depo3, depo4, depo5 } from "../../img/Testimunials";
import depoImg1 from "../../../img/Testimunials/depo01.jpg";
import depoImg2 from "../../../img/Testimunials/depo02.jpg";
import depoImg3 from "../../../img/Testimunials/depo03.jpg";
import depoImg4 from "../../../img/Testimunials/depo04.jpg";
import depoImg5 from "../../../img/Testimunials/depo05.jpg";
export const MySection = styled.section`
  /* height: 180vh; */
  @media (max-width: 1273px) {
    /* background: blue; */
    padding-bottom: 50px;
    #content {
      .row-2 {
        .items:first-child {
          margin-right: 150px;
        }
        align-items: space-between;
        justify-content: center;
      }
    }
  }
  @media (max-width: 1066px) {
    /* background: red; */
    #content {
      .row-2 {
        .items:first-child {
          margin-right: 50px;
        }
      }
    }
  }
  @media (max-width: 925px) {
    /* background: green; */
    #content {
      .row-1 {
        flex-direction: column;
        align-items: center;
      }
      .row-2 {
        flex-direction: column;
        align-items: center;
        /* flex: 0 0 0; */
        .items:first-child {
          margin-right: 0px;
        }
      }
    }
  }
  @media (max-width: 805px) {
  }

  h2 {
    font-size: 2.28em;
    padding-top: 25px;
    color: black;
  }
  h2:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 25px;
    height: 3px;
    background: #d2ff00;
    background: black;
    /* border: 1px solid #d2ff00; */
  }
  #content {
    /* display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around; */
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; */
    margin-top: 50px;
    /* height: 80%; */
    position: relative;
  }
  .items {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; */

    /* background-color: blue; */
    /* margin-left: 30px; */
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* align-items: center;
    justify-content: space-around; */
    /* background-size: 130%; */
    /* background-size: 100%; */
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    /* border: 1px solid green; */
    /* border-radius: 5px; */
    p {
      position: relative;
      color: black;
      font-size: 0.85em;
    }
    span {
      color: white;
      font-style: italic;
      position: absolute;
    }
    span:first-child {
      font-size: 3.7em;
    }
    span:last-child {
      font-size: 1.7em;
    }
  }
  .row-1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .items {
      /* align-items: center; */
      flex: 0 0 calc(50% - 15px);
      /* width: 506.594px; */
      min-width: 350px;
      max-width: 564px;
      /* background-size: 130% 100%; */
      height: 450px;
      min-height: 475px;
      background-size: 615px 448px;
      background-position: center;
      margin-bottom: 10px;
      background-repeat: no-repeat;
      /* &:first-child {
      }
      &:last-child {
      } */
    }
    /* .items:not(:last-child) {
      margin-bottom: 25px;
    } */
    /* width: 100%; */
  }
  .row-2 {
    /* flex-direction: column; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: space-between;
    .items {
      flex: 0 0 calc(33.33333% - 15px);
      min-width: 335px;
      max-width: 370px;
      min-height: 475px;
      /* max-width: 348px;
      flex-grow: 1; */
      height: 475px;

      background-size: 335px 475px;
    }
    .items:not(:last-child) {
      margin-bottom: 25px;
    }
  }
  /* .items:not(:last-child) {
    margin-bottom: 25px;
  }
  .items:nth-child(-n + 2) {
    flex: 0 0 50%;
  }
  .items:nth-child(n + 3) {
    flex: 0 0 calc(33.33333% - 10px);
    min-width: 335px;
    justify-content: space-around;
    align-items: center;
    height: 475px;
    &:not(:last-child) {
      margin-right: 15px;
    }
  } */

  .item-1 {
    background: linear-gradient(
        rgba(179, 247, 0, 0.45),
        rgba(179, 247, 0, 0.45)
      ),
      url(${depoImg1});

    /* Text:  */
    p {
      padding-right: 140px;
      padding-left: 50px;
    }
    p:first-child {
      padding-top: 170px;
      text-align: left;
    }
    p:last-child {
      text-align: right;
    }
    span:first-child {
      left: calc(50px - 30px);
      top: calc(170px - 30px);
    }
  }
  .item-2 {
    background: linear-gradient(
        rgba(83, 123, 145, 0.65),
        rgba(83, 123, 145, 0.65)
      ),
      url(${depoImg2});
    /* Text:  */
    p {
      padding-left: 100px;
      padding-right: 50px;
      text-align: right;
    }
    p:first-child {
      padding-top: 220px;
      text-align: left;
    }
    span:first-child {
      /* left: 70px;
      top: 190px; */
      left: calc(100px - 30px);
      top: calc(220px - 30px);
      font-size: 3.73em;
      position: absolute;
    }
  }
  .item-3 {
    background: linear-gradient(
        rgba(146, 54, 227, 0.45),
        rgba(146, 54, 227, 0.45)
      ),
      url(${depoImg3});
    background-position: top;
    /* background-size: 200%; */
    /* background-repeat: no-repeat; */
    /* Text:  */
    p {
      padding-left: 50px;
      padding-right: 50px;
      text-align: right;
    }
    p:first-child {
      padding-top: 170px;
      text-align: left;
    }
    span:first-child {
      left: calc(50px - 30px);
      top: calc(170px - 30px);
      font-size: 3.73em;
      position: absolute;
    }
  }
  .item-4 {
    background: linear-gradient(
        rgba(233, 235, 234, 0.45),
        rgba(233, 235, 234, 0.45)
      ),
      url(${depoImg4});

    /* Text:  */
    p {
      padding-left: 70px;
      padding-right: 50px;
      text-align: right;
    }
    p:first-child {
      padding-top: 240px;
      text-align: left;
    }
    span:first-child {
      left: calc(70px - 30px);
      top: calc(240px - 30px);
      font-size: 3.73em;
      position: absolute;
    }
  }
  .item-5 {
    background: linear-gradient(
        rgba(227, 99, 54, 0.45),
        rgba(227, 99, 54, 0.45)
      ),
      url(${depoImg5});
    /* Text:  */
    p {
      padding-left: 100px;
      padding-right: 30px;
      text-align: right;
    }
    p:first-child {
      padding-top: 280px;
      text-align: left;
    }
    span:first-child {
      left: calc(100px - 30px);
      top: calc(280px - 30px);
      font-size: 3.73em;
      position: absolute;
    }
  }
`;
