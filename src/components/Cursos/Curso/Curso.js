import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
// import styles from "./Cursos.module.css";
import AsideBar from "../AsideBar/AsideBar";
import { Provider } from "react-redux";
import store from "../../../Store/index";
import { Link, useParams } from "react-router-dom";
import SvgIcons from "../../SvgIcons";
import {MyCursos} from "./CursoStyles";
import Footer from "../../Footer/Footer";
import Head from "../../Head/Head";
import HomeBtn from "../../HomeBtn/HomeBtn";

// import Intro from "./Intro/Intro";
// import Head from "../Head/Head";


        // <NavLink to="Curso/JavaScript">             
        //   <button>Vamos!</button>             
        // </NavLink>  
        // <NavLink to="Curso/React">
        //   <button>Vamos!</button>             
        // </NavLink>
        //==============================================//
        // <Routes>
        //   <Route path="/" exact element={<Home />} />
        //   <Route
        //     path="Curso/JavaScript"
        //     element={<Cursos curso="JavaScript" />}
        //   />
        //   <Route path="Curso/React" element={<Cursos curso="React" />} />
        // </Routes>
    
  const Curso = ({ curso }) => {
  let {id} = useParams();
  // console.log(id);
  function mudarEstilo (id){
   switch(id){
     case "web_design":
        return (<span id="courseName" style={{color: "blue"}}>Web Design</span>);
        // break;
      case "sass":
        return (<span id="courseName" style={{color: "#ff89ae"}}>Sass</span>);
        // break;
      case "javascript":
        return (<span id="courseName" style={{color: "#ffc700"}}>JavaScript</span>);
        // break;
      case "react":
        return (<span id="courseName" style={{color: "#61DAFB"}}>React</span>);
        // break;  
      case "amb_dev":
        return (<span id="courseName" style={{color: "#3E3E3E"}}>Configuração do Ambiente de Desenvolvimento</span>);
        // break;  
      case "vers_modbundl":
        return (<span id="courseName" style={{color: "#5E2A29"}}>Controle de Versão e Module Bundler</span>);
        // break;  
      default: 
      return "valor inesperado";
    }
  }
  let cursoatual = mudarEstilo(id);
  // const [asideOpen, setAsideOpen] = React.useState(false);
  // let $asideBar = document.getElementById("aside");


  // function showAside(){
    // $asideBar.style.display = "block";
    // $asideBar.style.position = "absolute";
    // setAsideOpen(!asideOpen);
  // }

  // React.useEffect(()=>{
  //   if ($asideBar){
  //     if (asideOpen){
  //       $asideBar.style.display = "flex";
  //       $asideBar.style.position = "absolute";
  //     }else{
  //       $asideBar.style.display = "none";
  //     }
  //   }
  // },[asideOpen]);
// console.log(cursoatual.props.children);
  return (
    <MyCursos>
        <Head title={`${cursoatual.props.children} Course`} description={`Aprenda ${cursoatual.props.children} conosco`} />
      <nav>
      <Link to="/">
        {/* <span className="home">Home</span> */}
        <HomeBtn />
      </Link>
      {/* <Head title={`Cursos | ${curso}`} description="Aprenda Conosco" /> */}
      <Link  to="/cursos">
        <SvgIcons id="#backBtn"icon="ArrowLeft"/>
       </Link>
      </nav>

    {/* <h1 className="container">Curso de: <span id="courseName">{id}</span></h1> */}
    <h1 className="container">{cursoatual} Course</h1>
    <section className="content">


    <div id="videoPlayer" className="container">
      {/* <button id="showAsideBtn" onClick={showAside}>=</button> */}
      {/* <button id="showAsideBtn">=</button> */}
      <Provider store={store}>
        <VideoPlayer curso={id}/>
        <AsideBar curso={id}/>
      </Provider>
    </div>

    </section>
    <Footer/>
    </MyCursos>
  );
};

export default Curso;
