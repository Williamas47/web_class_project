import React from "react";
import { MyHeader, Logo, Login } from "./HeaderStyles";
import login from "../../svg/login.svg";
import { Link } from "react-router-dom";
// import Prices from "../Prices/Prices";

// var #hamb = document.getElementById("myLinks");

function burgerOpen({ target }) {
  let $lista = document.getElementById("lista");
  if ($lista.style.display === "flex") {
    // console.log("haha");
    $lista.style.display = "none";
    target.style.borderRadius = "5px ";
  } else {
    // console.log("hehe");
    $lista.style.display = "flex";
    target.style.borderRadius = "5px 5px 0 0";
  }
  
}

const Header = () => {
  return (
    <MyHeader id="header" className="container">
      <Logo className="logo">
        <h2>CompanyName</h2>
      </Logo>
      <nav className="menu">
        <button onClick={burgerOpen} id="burger">
          =
        </button>
        <ul id="lista">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Prices">Prices</a>
          </li>
          <li>
            <a href="#Mobile">Mobile</a>
          </li>
          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <Login>
              <Link to="/login">
                Login
                <img src={login} alt="icone de login" />
              </Link>
            </Login>
          </li>
        </ul>
      </nav>
    </MyHeader>
  );
};

export default Header;
