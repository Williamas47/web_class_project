import styled from "styled-components";
import { keyframes } from "styled-components";
const animation = keyframes`
0% {width: 5px; left: 50%;}
100% {width: 100%;}
`;
export const MyHeader = styled.header`
  @media (max-width: 600px) {
    width: 100%;
    span {
      margin-left: 20px;
    }
  }
  @media (max-width: 1000px) {
  }
  @media (min-width: 1000px) {
    button#burger {
      display: none;
    }
  }

  display: flex;
  /* height: 50px; */
  height: 8vh;

  /* background: #121e14; */
  justify-content: space-between;
  align-items: center;

  ul {
    li {
      display: inline-block;
    }

    li:not(:first-child) {
      margin-left: 50px;
    }
    li a {
      text-decoration: none;
      color: #e9ebea;
      &:hover {
        cursor: pointer;
        transition: ease 0.5s;
        &:after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0px;
          height: 3px;
          background: #d2ff00;
          animation-name: ${animation};
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    /* background: red; */
    ul {
      /* display: flex; */
      display: none;
      position: absolute;
      flex-direction: column;
      align-items: center;
      /* margin-top: 295px; */
      margin-top: 0px;
      background: white;
      border-radius: 10px;
      right: 0;
      /* top: 0; */
      /* margin-right: 150px; */
      padding: 20px;
      /* height: 200px; */
      z-index: 1;
      li {
        a {
          color: black;
        }
      }
      li:not(:last-child) {
        margin-bottom: 25px;
        display: block;
      }
      li:not(:first-child) {
        margin-left: 0px;
      }
    }
    button#burger {
      display: default;
      background: white;
      /* margin-top: 30px; */
      /* margin-bottom: 10px; */
      margin-right: 15px;
      border: 0px;
      width: 40px;
      height: 30px;
      z-index: 3;
      border-radius: 5px;
    }
  }

`;

export const Logo = styled.span`
  width: 250px; /* 300 */
  height: 50px;
  margin-top: -10px;
  background-color: #88ea06;
  border-radius: 0 0 10px 10px;
  box-shadow: 3px 3px 0 white;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: black;
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  /* justify-content: center; */
  z-index: 2;

  a {
    /* font-size: 13px; */
    text-decoration: none;
    color: #e9ebea;
  }
  img {
    vertical-align: middle;
    margin-left: 5px;
    /* margin-top: 110px; */
  }
  /* tava aq antes td */
`;
