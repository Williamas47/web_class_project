import styled from "styled-components";

export const MyPrices = styled.div`
  /* margin: 0 auto; */
  @media (min-width: 600px) and (max-width: 859px) {
  }

  @media (max-width: 666px) {
    /* background: blue; */
    #content {
      flex-direction: column;
    }
    .item:not(:last-child) {
      padding-bottom: 25px;
      border-bottom: 2px solid #00c41f;
    }
  }

  padding-top: 25px;
  padding-bottom: 25px;
  /* height: 100vh; */
  /* background: blue; */
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  /* align-items: center; */
  /* justify-content: center; */
  h2 {
    font-size: 2.28em;
  }
  h2:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 25px;
    height: 3px;
    background: #d2ff00;
  }
  #content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    /* margin-top: 25px; */
  }
  .item {
    margin-top: 25px;
    height: 450px;
    width: 275px;
    width: 225px;
    padding: 0 20px;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    ul {
      list-style: none;
    }
    ul.details {
      line-height: 30px;
      line-height: 25px;
    }
    ul.lenguages {
      display: flex;
      flex-direction: row;
      /* width: 115px; */

      /* align-items: center; */
      /* justify-content: center; */
      flex-wrap: wrap;
      /* background: red; */
    }
    ul.lenguages li {
      display: flex;
      justify-content: space-around;
      /* align-items: space-around; */
      flex: 0 0 33.333333%;
      margin-bottom: 10px;
    }

    ul.lenguages li:nth-last-child(-n + 3) {
      margin-bottom: 0px;
    }
    ul.lenguages img {
      /* width: 30px;
    height: 30px; */
      /* width: 25px; */
      /* height: 25px; */
    }
    &:after {
      content: "";
      position: absolute;
      right: 0;
      /* bottom: 10px; */
      width: 1.5px;
      height: 275px;
      height: 175px;
      background: #00c41f;
    }
    &:before {
      content: "";
      position: absolute;
      left: 0;
      /* bottom: 0; */
      width: 1.5px;
      height: 275px;
      height: 175px;
      background: #00c41f;
    }
    #preco {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      span {
        /* margin-bottom: 10px; */
        position: absolute;
        top: -10px;
        left: -10px;
      }
      p {
        font-size: 0.8em;
      }
    }
  }
  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    /* background: red; */
  }
  .proceedBtn {
    margin: 0 auto;
    margin-top: 30px;
    height: 30px;
    width: 80px;
    border-radius: 5px;
    color: #121a13;
    background: #b3f700;
    border: 0;
    padding: 5px;
    transition: ease 0.5s;
    &:hover {
      transform: scale(1.1);
      transition: ease 0.5s;
      background: #d2ff00;
      filter: invert(1);
      cursor: pointer;
    }
  }
`;
