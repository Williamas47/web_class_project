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
    const $radioBtn = document.getElementsByClassName("radioBtn");
    function showInfos(e){
        e.preventDefault();
        // setInfoShow(!infoShow);
        // let actualNumber = e.target.id.match(/\d$/);
        // setActualCard(actualNumber[0]);
        // console.log(actualCard);
    }
    React.useEffect(()=>{
        if($informacoes !==null && actualCard !==null ){

            $radioBtn[actualCard].checked= true;
            if( $radioBtn[actualCard].checked){

                $moreBtn[actualCard].style.transform = "rotate(45deg)";
                $moreBtn[actualCard].style.background = "red";
                $informacoes[actualCard].style.display ="block";
                $informacoes[actualCard].classList.add("infoAnimateOn");
                $informacoes[actualCard].classList.remove("infoAnimateOff");
            }else{
                // $radioBtn[actualCard].checked= false;
                $moreBtn[actualCard].style.transform = "rotate(0deg)";
                $moreBtn[actualCard].style.background = "#0EB5F3";
                setTimeout(()=> {$informacoes[actualCard].style.display ="none"}, 1000);
                $informacoes[actualCard].classList.add("infoAnimateOff");
                $informacoes[actualCard].classList.remove("infoAnimateOn");
            }
        }
    }, [infoShow, $informacoes, $moreBtn, actualCard]);
    // }, [infoShow]);

function newFunc(e){
    setInfoShow(!infoShow);
    let actualNumber = e.target.id.match(/\d$/);
    setActualCard(actualNumber[0]);
    if (actualCard !== null){
            let actualNumber = e.target.id.match(/\d$/);
            setActualCard(actualNumber[0]);
            if($radioBtn[actualCard].checked === false){
                setTimeout(()=> {$informacoes[actualCard].style.display ="none"}, 1000);
                $informacoes[actualCard].classList.add("infoAnimateOff");
                $informacoes[actualCard].classList.remove("infoAnimateOn");
                $moreBtn[actualCard].style.transform = "rotate(0deg)";
                $moreBtn[actualCard].style.background = "#0EB5F3";
            }else{
                $moreBtn[actualCard].style.transform = "rotate(45deg)";
                $moreBtn[actualCard].style.background = "red";
                $informacoes[actualCard].style.display ="block";
                $informacoes[actualCard].classList.add("infoAnimateOn");
                $informacoes[actualCard].classList.remove("infoAnimateOff");
            }
        
        console.log("aa");
        // console.log(e);
    }
}
 
    

//     if (actualCard !==null){
//     console.log(e.target !== $radioBtn[actualCard]);
//     console.log(e.target);
//     console.log($radioBtn[actualCard]);
//     console.log(actualNumber[0]);
//     console.log(actualCard);
//         if($radioBtn[actualCard].checked){
//          $informacoes[actualCard].style.display ="block";
//          $informacoes[actualCard].classList.add("infoAnimateOn");
//          $informacoes[actualCard].classList.remove("infoAnimateOff");
//         }else{
//             setTimeout(()=> {$informacoes[actualCard].style.display ="none"}, 1000);
//             $informacoes[actualNumber[0]].style.display ="block";
//             $informacoes[actualNumber[0]].classList.add("infoAnimateOn");
//             $informacoes[actualNumber[0]].classList.remove("infoAnimateOff");

//             $informacoes[actualCard].classList.add("infoAnimateOff");
//             $informacoes[actualCard].classList.remove("infoAnimateOn");
//         }
//      }
// }
    // React.useEffect(()=>{

    // }, [actualCard]);
     return (
        <MyCursoss>
            <Head title={`Cursos`} description={`Veja aqui nossos cursos da área de Tecnologia`} />
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
                        <h4>Usuário_01</h4>
                        <Link to="/profile">
                        <SvgIcons icon="ProfileIco"/>
                        </Link>
                    </div>
                    <div className="planInfo">
                        <h3>Seu plano: <span style={{color: "#00C41F"}}>Pro</span></h3>
                        <button>Upgrade</button>
                    </div>
                </section>
            </nav>
            <h1 className="container">Nossos Cursos: </h1>

        <section id="content">
            <div id="courses" className="container" >
                <div className="card" id="card-01">
                    <span className="card-tittle"><h3>WebDesign</h3></span>
                    <div className="visual" style={{background: "#9DEEA9"}}>
                        <img src={webDesImg} alt="web_design_image"/>
                    </div>
                    <div className="description">
                        <p style={{color: "grey"}}>Carga horária: 35h</p>
                        <p><b>HTML, CSS, Photoshop e Adobe XD</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/web_design">
                                <button className="acessBtn">Acessar</button>
                            </Link>

                            <input id="btn0" className="radioBtn" type="radio" name="infoAtual" onChange={newFunc}/>
                            <label htmlFor="btn0">
                                <button className="moreBtn"  id="btn0" onClick={newFunc}> + </button>
                            </label>
                            
                        <div className="informacoes">
                            <p>Neste curso você aprenderá: </p>
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
                    <span className="card-tittle"><h3>CSS avançado com SASS</h3></span>
                    <div className="visual" style={{background:"#ECC7DA"}}>
                        <img src={sassImg} alt="sass_image"/>
                    </div>
                    <div className="description">
                        <p style={{color: "grey"}}>Carga horária: 5h</p>
                        <p><b>Sass</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/sass">
                                <button className="acessBtn">Acessar</button>
                            </Link>

                            <input id="btn1" type="radio" className="radioBtn" name="infoAtual"  onChange={newFunc}/>
                            <label htmlFor="btn1">
                                <button className="moreBtn" id="btn1" onClick={newFunc}> + </button>
                            </label>

                        <div className="informacoes">
                            <p>Neste curso você aprenderá: </p>
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
                    <p style={{color: "grey"}}>Carga horária: 40h</p>
                        <p><b>JavaScript ES5, ES6 e acima</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/javascript">
                                <button className="acessBtn">Acessar</button>
                            </Link>
                            
                            <input id="btn2" className="radioBtn" type="radio" name="infoAtual" onChange={newFunc}/>
                            <label htmlFor="btn2">
                                <button className="moreBtn" id="btn2" onClick={newFunc}> + </button>
                            </label>
                        <div className="informacoes">
                            <p>Neste curso você aprenderá: </p>
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
                    <p style={{color: "grey"}}>Carga horária: 35h</p>
                        <p><b>React</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/react">
                                <button className="acessBtn">Acessar</button>
                            </Link>
                        <button className="moreBtn" id="btn3" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>Neste curso você aprenderá: </p>
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
                    <span className="card-tittle"><h3>Configuração do Ambiente de Desenvolvimento</h3></span>
                    <div className="visual" style={{background:"#3E3E3E"}}>
                    <img src={ambDevImg} alt="amb_dev_image"/>
                    </div>
                    <div className="description">
                    <p style={{color: "grey"}}>Carga horária: 5h</p>
                        <p><b>VSCode, ESLint e Prettier</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/amb_dev">
                                <button className="acessBtn">Acessar</button>
                            </Link>
                        <button className="moreBtn" id="btn4" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>Neste curso você aprenderá: </p>
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
                    <span className="card-tittle"><h3>Controle de Versão e Module Bundler</h3></span>
                    <div className="visual" style={{background:"#5E2A29"}}>
                    <img src={versModulImg} alt="vers_modul_image"/>
                    </div>
                    <div className="description">
                    <p style={{color: "grey"}}>Carga horária: 8h</p>
                        <p><b>Npm, Webpack e Git</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                            <Link to="/curso/vers_modbundl">
                                <button className="acessBtn">Acessar</button>
                            </Link>
                        <button className="moreBtn" id="btn5" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>Neste curso você aprenderá: </p>
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
                    <p style={{color: "grey"}}>Carga horária: 12h</p>
                        <p><b>React Redux</b></p>
                        <p>Lorem ipsum dolor sit amet, elit
                            consectetur adipiscing.</p>
                        <button className="soonBtn" disabled><b>Em Breve!</b></button>
                        <button className="moreBtn" id="btn6" onClick={showInfos}> + </button>
                        <div className="informacoes">
                            <p>Neste curso você aprenderá: </p>
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
