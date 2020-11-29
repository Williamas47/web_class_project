import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
// import styled from "styled-components";
// import { colors } from "./AppSassValues";
import Intro from "./components/Home/Intro/Intro";
import Prices from "./components/Home/Prices/Prices"; 
import Mobile from "./components/Home/Mobile/Mobile";
import Testimunials from "./components/Home/Testimunials/Testimunials";

import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Curso from './components/Cursos/Curso/Curso';
import Cursos from './components/Cursos/Cursos';
import Head from "./components/Head/Head";
 
// export const Container = styled.div`
//   width: 80%;
//   margin: 0 auto;
// `;
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Head title={`Home | WebClass`} description="Aprenda Conosco" />
            <Header />
            <Intro />
            <Prices />
            <Mobile />
            <Testimunials />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/curso/:id">
            <Curso/>
          </Route>
          <Route path="/cursos">
            <Cursos/>
          </Route>
  
        </Switch>
        {/* // <Link path="/login" /> */}
      </BrowserRouter>
    </div>
  );
};

// CORES:
// Verde forte: #00C41F;
// Verde clarinho: #d2ff00;
// Cinza: #e9ebea;
// Cinza preto: #3E3E3E;
// Laranja: #FF7700;
// Azulzinho: #0EB5F3;
// Preto roxo: #1D1D2C;
// roxo preto(player): #171731;
// 





// form validations *** xx

// por perfil no Curso tbm?



// arrumar header li sumindo qnd aperta o botao no responsivo
// na tela menor colocar a lista dentro de uma div
// que a DIV vai aparecer com o click do botao
// Overflow hidden
// .... criar essa div com js? 

// no login e cursos tentar resumir td numa so funcção
// de fzer aparecer ou nao o conteudo (info, flags etc)

// animação da info ocorrer somente uma vez ao ir prev next.
// tirar a animação ao clicar no next? display none?..

// ======== ARRUMEI ======== //

// Arrumar o Height do login***

// Por tudo em portugues ou td em ingles *** CURSO

// img do cursos profile

// arrumar abrir duas info ao msm tempo e o bug disso nos cursos
// talvez usar um type radio tipo o like dislike e abrir só 1 por vez

//funcionalidade de ver os cursos(todos), porem se nao estiver logado
// mostrar eles divididos por categoria (pro, starter etc)
// e ai por o button not allowed ou qnd clicar no acesso ir pro login/cadastro


export default App;
// 182 -     1556     - 182
