import React from "react";
import { MyLogin } from "./LoginStyles";
import { Link } from "react-router-dom";
import visa from "../../img/Icons/payment/visa.png";
import paypal from "../../img/Icons/payment/paypal.png";
import mastercard from "../../img/Icons/payment/mastercard.png";
import loginface from "../../img/login-default.png";
import {plans} from "../Home/Prices/Prices";
import SvgIcons from "../SvgIcons";
import Head from "../Head/Head";
import HomeBtn from "../HomeBtn/HomeBtn";
import Footer from "../Footer/Footer";

const Login = () => {

// plans.map((plan)=> console.log(plan))
  const [price, setPrice] = React.useState(null);
  const [infoShow, setInfoShow] = React.useState(false);
  const [flagShow, setFlagShow] = React.useState(false);
  const [info, setInfo] = React.useState(0);
  // const [closeSVG, setCloseSVG] = React.useState(0);
  // let $infoBtn = document.getElementById('infoBtn');
  let $infoSVG = document.getElementById('infoSVG');
  let $infoBtns = document.getElementsByClassName('infoBtns');
  let $infos = document.getElementById('infos');
  let $options = document.getElementById("options");
  let $DropDownArrowSVG = document.getElementById("DropDownArrow");
  // console.log($infos);
  // function removeAnimations(){
  //   $options.classList.remove("animateFlagClose");
  //   $options.classList.remove("animateFlagOpen");
  //   $infos.classList.remove("animateBack");
  //   $infos.classList.remove("animate");    
  //   $infoSVG.classList.remove("infoClose");
  //   $infoSVG.classList.remove("infoOpen");
  // }
  function changeForm(e) {
    // let $cad1 = document.getElementsByClassName("cadastro-1");
    let $cad = document.getElementsByClassName("cadastro");
    let $log = document.getElementsByClassName("login");
    let $btnLog = document.getElementById("btnLog");
    let $btnCad = document.getElementById("btnCad");
    e.preventDefault();
    if (e.target.id === "btnCad") {
      e.target.style.cursor = "default";
      $btnLog.style.cursor = "pointer";
      $cad[0].style.display = "block";
      $log[0].firstChild.style.display = "none";
      $log[0].style.display = "none";
    } else if (e.target.id === "btnLog") {
      e.target.style.cursor = "default";
      $btnCad.style.cursor = "pointer";
      $cad[0].style.display = "none";
      $log[0].style.display = "block";
      $log[0].firstChild.style.display = "flex";
    }
    return "erro";
  }
  function nextPrev(e) {
    let $cad1 = document.getElementsByClassName("cadastro-1");
    let $cad2 = document.getElementsByClassName("cadastro-2");
    e.preventDefault();
    if (e.target.id === "btnNext") {
            // $cad2[0].style.display = "flex";
      $cad2[0].style.display = "block";
      $cad1[0].style.display = "none";
    } else if (e.target.id === "PrevBtn") {
      // e.preventDefault();
    
      $cad1[0].style.display = "flex";
      $cad2[0].style.display = "none";
    }
  }
  function changePlan(e) {
    let $starterBtn = document.getElementById("StarterBtn");
    let $proBtn = document.getElementById("ProBtn");
    let $lifelongBtn = document.getElementById("LifelongBtn");
    let buttons = [$starterBtn, $proBtn, $lifelongBtn];
    e.preventDefault();
    let currBtn = e.target;
    // console.log(currBtn.style);
    // console.log(currBtn.innerText);
    // let price = "25,00";
    buttons.map((item) => {
      if (item.innerText !== currBtn.innerText) {
        // console.log(item);
        // item.classList.remove("active");
        item.style.color = "black";
        item.style.background = "white";
        item.style.border = "0px";
      }
      return "sucess";
    });
    currBtn.addClass = "active";
    // currBtn.style.color = "#00c41f";
    currBtn.style.color = "#4C08FF";
    currBtn.style.background = "#e9ebea";
    // currBtn.style.border = "1px solid #00c41f";
    currBtn.style.border = "1px solid black";
    currBtn.style.borderBottom = "5px solid #00c41f";

    switch (currBtn.innerText) {
      case "Starter":
        setPrice(plans[0].price);
        break;
      case "Pro":
        setPrice(plans[1].price);
        break;
      case "Lifelong":
        setPrice(plans[2].price);
        break;
      default:
        return "Erro";
    }
  }
  function infos(e) {
    // console.log(infoShow);
    setInfoShow(!infoShow);
    // console.log("aqui: ")
    // console.log(infoShow);
    // console.log($infos);
    // if (!infoShow){
    //   $infos.classList.add("animate");
    //   $infos.style.display= "default" ;
    // }else{
    //   $infos.classList.remove("animate");
    //   $infos.classList.add("animateBack");
    //   // $infos.style.display= "none" ;
    // }


    // $infos? $infos.style.display= "default"  : console.log("null");
    // console.log(e.target);
    // $infoBtn? $infoBtn.class = "animate" : console.log("null");
    // console.log($infoBtn);
    // $infoBtn.classList.add("animate");
        // e.target.transform.filter = "invert(1)";
    // info == true?
  }
  React.useEffect(()=>{
    if ($infos !== null){
      // console.log($infos)
      // console.log(infoShow);
      if (infoShow){

        $infoSVG.classList.add("infoOpen");
        $infoSVG.classList.remove("infoClose");
        //   -----------------------------------  // 
        $infos.classList.add("animate");
        $infos.classList.remove("animateBack");

      }else{
        $infoSVG.classList.remove("infoOpen");
        $infoSVG.classList.add("infoClose");
        //   -----------------------------------  // 
        $infos.classList.remove("animate");
        $infos.classList.add("animateBack");
      }
    }
    // }, [infoShow, $infos]);
    }, [infoShow]);
  
    function showInfo(e){
 
    e.preventDefault();
    switch (e.target.innerText){
      case "Starter":
        setInfo(0);
        break;
      case "Pro":
        setInfo(1);
        break;
      case "Lifelong":
        setInfo(2);
        break;
      default:
        setInfo(null);
    }
    // console.log(info)
  }
  React.useEffect(()=>{
    for (let i = 0; i < $infoBtns.length; i++){
      if ($infoBtns[i] !== $infoBtns[info]){
        $infoBtns[i].style.background = "white";
        $infoBtns[i].style.color = "black";
      }
    }
    $infoBtns[info].style.background= "black";
    $infoBtns[info].style.color = "white";
  }, [info, $infoBtns])
  // }, [info])
  
  function showOptions(e){
    setFlagShow(!flagShow);
    e.preventDefault();
    // console.log($options);
  }
  React.useEffect(()=>{
    if ($options !== null){
      if (flagShow){
        $options.style.display= "flex" 
        $options.classList.add("animateFlagOpen");
        $options.classList.remove("animateFlagClose");
        $DropDownArrowSVG.classList.add("animadoOpen")
        $DropDownArrowSVG.classList.remove("animadoClose")
      }else{
        $DropDownArrowSVG.classList.remove("animadoOpen")
        $DropDownArrowSVG.classList.add("animadoClose")
        $options.classList.add("animateFlagClose");
        $options.classList.remove("animateFlagOpen");
        // $options.style.display= "none";
      }
    }
  // }, [flagShow, $DropDownArrowSVG]);
  }, [flagShow]);

  // function idHandle(e){
  //   let numero = e.target.value;
  //   if (e.target.validity.patternMismatch) {
  //     e.target.setCustomValidity("Deveria ter apenas números aqui =) ");
  //   }else{ 
  //     e.target.value = numero.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, function(regex, num1, num2, num3, num4){
  //       return numero = (`${num1}.${num2}.${num3}-${num4}`);
  //     });  
  //   }
  // }
  return (
    <MyLogin>
       <Head title={`Sign Up/Login`} description="Cadastre-se ou faça seu Login" />
      <Link to="/">
        <HomeBtn />
      </Link>
      <div className="content ">
        <div className="left-side">
          <div className="intro">
            <h3>Connect with us</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
          </div>
        </div>
        <div className="right-side">
          <h1>
          Doesn't have an <span style={{ color: "#00C41F" }}>Account</span> yet?
          </h1>
          <form>
            <nav>
              <button onClick={changeForm} id="btnCad" className="active">
                Sign Up
              </button>
              {/* <span></span> */}
              <button onClick={changeForm} id="btnLog">
                Login
              </button>
            </nav>

            <div className="cadastro">
              <div className="cadastro-1 ">
                <h2>Informations: </h2>
                <label className="item">
                  Full Name:
                  <input type="text" placeholder="Clever Mcqueen Smith " />
                </label>
                <label className="item">
                  <p>E-mail:</p>
                  <input type="email" placeholder="email@example.com"/>
                </label>
                <div className="flex-row">
                  <label className="item">
                    <p>ID:</p>
                    {/* <input type="text" placeholder="123.456.789-10" pattern="[0-9]{11}" onChange={idHandle}/> */}
                    <input type="number" placeholder="123.456.789-10"/>
                  </label>
                  <label className="item">
                    <p>Birth Date:</p>
                    <input type="date" />
                  </label>
                </div>
                <label className="item">
                  <p>Phone number:</p>
                  <input type="number" placeholder="(12) 3456-7890" />
                </label>
                <div className="flex-row">
                  <label className="item">
                    <p>Password:</p>
                    <input type="password" />
                  </label>
                  <label className="item">
                    <p>Confirm password:</p>
                    <input type="password"  />
                  </label>
                </div>
                <button id="btnNext" onClick={nextPrev}>
                  Next
                </button>
              </div>
              
              <div className="cadastro-2">
                   <h2>Payment: </h2>
                <div className="content">
                  {/* <label></label> */}
                  <label className="item" id="name">
                    <p>Name on card: </p>
                    <input type="text" placeholder="Clever M. Smith" />
                  </label>
                  <label className="item" id="number" >
                    <p>Number: </p>
                    <input type="number"  placeholder="1234 4567 8910 1112" />
                  </label>
                  <label className="item" id="code">
                    <p>Code: </p>
                    <input type="number"placeholder="123" />
                  </label>
                  <label className="item" id="validata">
                    <p>Validation data: </p>
                    <input type="text" placeholder="mm/yy" />
                  </label>
                  <label className="item" id="flag">
                    <span id="flagContent">
                      <p>Flag: </p>
                      <div id="flagOptions">
                        <button onClick={showOptions}>Choose<span ><SvgIcons icon="DropDownArrow"/></span></button>
                        <div id='options'>
                          
                        <label className="option" id="visa">
                          <input type ="radio" name="flag" value="visa"/>
                          <img alt="visa-logo" src={visa}/>
                        </label>
                        <label className="option" id="mastercard">
                          <input type ="radio" name="flag" value="mastercard"/>
                          <img alt="mastercard-logo" src={mastercard}/>
                        </label>
                        <label className="option" id="paypal">
                          <input type ="radio" name="flag" value="paypal"/>
                          <img alt="paypal-logo" src={paypal}/>
                        </label>
                        </div>
                      </div>
                    </span>
                  </label>
                  <span className="item" id="plans">
                    <p>Choose your Plan: </p>
                    <div className="plans">
                      {plans.map((plan, index)=>{
                        return (
                          <button key={index} id={`${plan.title}Btn`} onClick={changePlan}>{plan.title}</button>
                        )
                      })}
                    <label id="infoBtn" onClick={infos}>
                      {infoShow === false? 
                        <SvgIcons icon="InfoIconOpen"/>
                        :
                        <SvgIcons icon="InfoIconClose"/>
                      }
                    </label>
                    <div id= "infos" >
                      <button className="infoBtns" onClick={showInfo}>Starter</button>
                      <button className="infoBtns" onClick={showInfo}> Pro</button>
                      <button className="infoBtns" onClick={showInfo}>Lifelong</button>
                      <div id="content">
                        <p>Learn: </p>
                        <ul>
                          {plans[info].lenguages.map((leng, index)=>{
                            return(
                              <li key={index}>{leng}</li>
                            )
                          })}    
                        </ul>
                      </div>
                    </div>
                  </div>
                </span>
                  <span className="item" id="price">
                    {price ? <p>${price}/month</p> : <p>Choose a Plan</p>}
                  </span>
                  <label className="item" id="terms">
                  <input type="checkbox" />
                <span> I Agree and accept the <a href="/terms"> Terms and conditions</a></span>
                </label>
                <span className="item" id="confirmBtn">
                  <button id="confirm">Confirm</button>
                </span>
                <span className="item" id="prevBtn">
                  <button onClick={nextPrev} id="PrevBtn">
                    Prev
                  </button>
                </span>
              </div>
            </div>
            </div>
            <div className="login">
              <div className="content">
                {/* <img src={loginface} alt="user profile pic" /> */}
                <img/>
            
                <label className="item">
                  <p>E-mail</p>
                  <input type="email" placeholder="email@example.com" />
                </label>

                <label className="item">
                  <p>Password</p>
                  <input type="password" />
                </label>
        
                <label className="item log">
                  <button>Login</button>
                </label>
                {/* <span className="item"> */}
                  <Link to="/cursos">
                  <button className="guestBtn">Login as Guest</button>
                  </Link>
                {/* </span> */}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer style={{background: "#3E3E3E"}}/>
    </MyLogin>
  );
};

export default Login;
