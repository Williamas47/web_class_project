import React from 'react'
import {MyCursoss} from "./CursosStyles";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import SvgIcons from "../SvgIcons";
import HomeBtn from "../HomeBtn/HomeBtn";
// ============ IMGS ======================
import webDesImg from "../../img/Icons/cards/card01imgs.png";
import sassImg from "../../img/Icons/cards/Sass.png";
import jsImg from "../../img/Icons/cards/card03imgs.png";
import reactImg from "../../img/Icons/cards/React.png";
import ambDevImg from "../../img/Icons/cards/card05imgs.png";
import versModulImg from "../../img/Icons/cards/card06imgs.png";
import reduxImg from "../../img/Icons/cards/Redux.png";
// import loginImg from "../../img/login-default.png";
import Head from '../Head/Head';
// =========================================

const Cursos = () => {
    // const $informacoes = document.getElementById("informacoes");
    // let actual = null;
    const [infoShow, setInfoShow] = React.useState(false);
    const [actualCard, setActualCard] = React.useState(null);
    const $informacoes = document.getElementsByClassName("informacoes");
    const $moreBtn = document.getElementsByClassName("moreBtn");
    function showInfos(e){
        e.preventDefault();
        setInfoShow(!infoShow);
       let actualNumber = e.target.id.match(/\d$/)
       
        setActualCard(actualNumber[0]);
        // console.log(infoShow);
        if (actualCard !== null){
            if (actualNumber != actualCard){
                setInfoShow(true);
                // console.log("significa q estou tentando abrir um com o atual aberto");
                setTimeout(()=> {$informacoes[actualCard].style.display ="none"}, 1000);
                $informacoes[actualCard].classList.add("infoAnimateOff");
                $informacoes[actualCard].classList.remove("infoAnimateOn");
                $moreBtn[actualCard].style.transform = "rotate(0deg)";
                $moreBtn[actualCard].style.background = "#0EB5F3";
                // =================================================== //
                $informacoes[actualNumber[0]].style.display ="block"
                $informacoes[actualNumber[0]].classList.remove("infoAnimateOff");
                $informacoes[actualNumber[0]].classList.add("infoAnimateOn");
            }else{
                // $informacoes[actualCard].classList.add("infoAnimateOn");
                // $informacoes[actualCard].classList.remove("infoAnimateOff");
            }
        }
        // console.log("===============");
        // console.log("actualCard: " + actualCard);
        // console.log("actualNumber: " + actualNumber)
    }
    React.useEffect(()=>{
        // console.log($informacoes);
        if($informacoes !==null && actualCard !==null ){
            // console.log(actualCard);
            if(infoShow){
                $informacoes[actualCard].style.display ="block";
                $moreBtn[actualCard].style.transform = "rotate(45deg)";
                $moreBtn[actualCard].style.background = "red";
                $informacoes[actualCard].classList.add("infoAnimateOn");
                $informacoes[actualCard].classList.remove("infoAnimateOff");
            }else{
                setTimeout(()=> {$informacoes[actualCard].style.display ="none"}, 1000);
                $moreBtn[actualCard].style.transform = "rotate(0deg)";
                $moreBtn[actualCard].style.background = "#0EB5F3";
                $informacoes[actualCard].classList.add("infoAnimateOff");
                $informacoes[actualCard].classList.remove("infoAnimateOn");
            }
        }
    }, [infoShow, $informacoes, $moreBtn, actualCard]);
    // }, [infoShow]);
     return (
        <MyCursoss>
            <Head title={`Courses`} description={`Veja aqui nossos cursos da área de Tecnologia`} />
            <nav>
                <section className="nav-left">
                <Link to="/">
                    {/* <span className="home">Home</span> */}
                    <HomeBtn/>
                </Link>
                </section>
                <section className="nav-right">
                    <div className="userInfo">
                        {/* <img alt="profile_icon"/> */}
                        <img/>
                        <h4>User_01</h4>
                        <Link to="/profile">
                        <SvgIcons icon="ProfileIco"/>
                        </Link>
                    </div>
                    <div className="planInfo">
                        <h3>Your Plan: <span style={{color: "#00C41F"}}>Pro</span></h3>
                        <button>Upgrade</button>
                    </div>
                </section>
            </nav>
            <h1 className="container">Courses: </h1>

        <section id="content">
            <div id="courses" className="container" >
                <div className="card" id="card-01">
                    <span className="card-tittle"><h3>WebDesign</h3></span>
                    <div className="visual" style={{background: "#9DEEA9"}}>
                        <img src={webDesImg} alt="web_design_image"/>
                    </div>
                    <div className="description">
                        <p style={{color: "grey"}}>Total Hours: 35h</p>
                        <p><b>HTML, CSS, Photoshop and XD</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                        <Link to="/curso/web_design">
                            <button className="acessBtn">Proceed</button>
                        </Link>
                        <button className="moreBtn"  id="btn0" onClick={showInfos}> + </button>                
                        <div className="informacoes">
                            <p>You will learn: </p>
                            <ul>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card"  id="card-02">
                    <span className="card-tittle"><h3>Advanced CSS with SASS</h3></span>
                    <div className="visual" style={{background:"#ECC7DA"}}>
                        <img src={sassImg} alt="sass_image"/>
                    </div>
                    <div className="description">
                        <p style={{color: "grey"}}>Total Hours: 5h</p>
                        <p><b>Sass</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/sass">
                                <button className="acessBtn">Proceed</button>
                            </Link>
                                <button className="moreBtn" id="btn1" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>You will learn: </p>
                            <ul>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card"  id="card-03">
                    <span className="card-tittle"><h3>JavaScript</h3></span>
                    <div className="visual" style={{background:"#FFF700"}}>
                    <img src={jsImg} alt="javascript_image"/>
                    </div>
                    <div className="description">
                    <p style={{color: "grey"}}>Total Hours: 40h</p>
                        <p><b>JavaScript ES5, ES6 and more</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/javascript">
                                <button className="acessBtn">Proceed</button>
                            </Link>
                        <button className="moreBtn" id="btn2" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>You will learn: </p>
                            <ul>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card"  id="card-04">
                    <span className="card-tittle"><h3>React</h3></span>
                    <div className="visual" style={{background:"#007A98"}}>
                    <img src={reactImg} alt="react_image"/>
                    </div>
                    <div className="description">
                    <p style={{color: "grey"}}>Total Hours: 35h</p>
                        <p><b>React</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/react">
                                <button className="acessBtn">Proceed</button>
                            </Link>
                        <button className="moreBtn" id="btn3" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>You will learn: </p>
                            <ul>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card"  id="card-05">
                    <span className="card-tittle"><h3>Setting Up the Working Environment</h3></span>
                    <div className="visual" style={{background:"#3E3E3E"}}>
                    <img src={ambDevImg} alt="amb_dev_image"/>
                    </div>
                    <div className="description">
                    <p style={{color: "grey"}}>Total Hours: 5h</p>
                        <p><b>VSCode, ESLint and Prettier</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/amb_dev">
                                <button className="acessBtn">Proceed</button>
                            </Link>
                        <button className="moreBtn" id="btn4" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>You will learn: </p>
                            <ul>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card"  id="card-06">
                    <span className="card-tittle"><h3>Version Control and Module Bundler</h3></span>
                    <div className="visual" style={{background:"#5E2A29"}}>
                    <img src={versModulImg} alt="vers_modul_image"/>
                    </div>
                    <div className="description">
                    <p style={{color: "grey"}}>Total Hours: 8h</p>
                        <p><b>Npm, Webpack e Git</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/vers_modbundl">
                                <button className="acessBtn">Proceed</button>
                            </Link>
                        <button className="moreBtn" id="btn5" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>You will learn: </p>
                            <ul>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card soon"  id="card-07">
                    <span className="card-tittle"><h3>React Redux</h3></span>
                    <div className="visual" style={{background:"#CAA8FF"}}>
                    <img src={reduxImg} alt="redux_image"/>
                    </div>
                    <div className="description">
                    <p style={{color: "grey"}}>Total Hours: 12h</p>
                        <p><b>React Redux</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                        <button className="soonBtn" disabled><b>Soon!</b></button>
                        <button className="moreBtn" id="btn6" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>You will learn: </p>
                            <ul>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                                <li>- Lorem ipsum dolor</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </MyCursoss>
    )
}

export default Cursos
