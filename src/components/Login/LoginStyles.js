import styled from "styled-components";
import { keyframes } from "styled-components";
import LoginBkg from "../../img/login.jpg";
// import visa from "../../img/Icons/payment/visa.png";
const infoAnimation = keyframes`
0% {width: 0px; height: 0px;}
10% {width: 0px; height: 0px;}
50%{height: 5px;}
70% {width: 90%; margin-left: 60%; margin-top: 0%; height: 5px; border: 0px }
99% {width: 90%; margin-left: 60%; margin-top: 95%; }
100% {width: 90%; height: 225px; margin-left: 60%; margin-top: 95%; border: 1px solid green;}

`;
const infoAnimationBack = keyframes`
0% {width: 90%;height: 225px; margin-left: 60%; border: 1px solid green; margin-top: 95%; }
50%{width: 90%; margin-left: 60%; margin-top: 0%;}
70% {width: 90%; margin-left: 60%; margin-top: 0%; height: 5px; border: 0px }
100% {height: 0px;}
`;
const infoIconAnimation = keyframes`
0%{}
50%{transform: rotate(-180deg); margin-left: 0px;}
99%{transform: rotate(-180deg);}
100%{margin-left: 75%;  transform: rotate(-180deg);}
`;
const infoIconAnimationBack = keyframes`
0%{margin-left: 75%;  transform: rotate(-180deg);}
50%{margin-left: 75%; transform: rotate(0deg);}
70%{ margin-left: 0px;}
99%{ margin-left: 0px;}
100%{ margin-left: 0px;}
`;
const flagAnimationOpen = keyframes`
0%{height: 0px;}
100%{ height: 135px;}
`;
const flagAnimationClose = keyframes`
0%{ height: 135px;}
100%{height: 0px;}
`;
const dropDownAnimation = keyframes`
0%{};
100%{ transform: rotate(180deg)};
`
const dropDownAnimationClose = keyframes`
0%{transform: rotate(180deg)};
100%{ };
`
export const MyLogin = styled.section`
  /* min-height: 100vh; */
  height: auto;
  /* padding-bottom: 50px; */
  /* height: 100vh; */
  background: black;
  /* background: #141414; */

  /* @media (max-width: 1035px){ */
  @media (max-width: 1425px){//1282 - 1090
    /* background: blue; */
    .content {

    .right-side{
      form{
        /* width: 70%; */
        width: 65%;
        margin: 0 auto;
        margin-left: 125px;
        /* margin-top: 25px; */
        .login{
          div{
          margin-top: 100px;
          }
        }
      }
    }
    }    
  }          
  @media (max-width: 1223px){//1101
 
    .flex-row.second{
      .item:first-child {
        margin-right: 50px;
      } 
      .item:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
        #flagContent{
        
          margin: 0 auto;
          margin-bottom: 10px;
        
      }
    }

  }
  @media (max-width: 1207px){//1050 -1167
    /* background: blue; */
    height: 100vh;
    
    .content{
      .left-side{
          min-width: 250px;
        .intro{
          font-size: 1em;
          /* background: green; */
          width: 70%;
          margin: 0 auto;
        }
        /* width: 650px; */
        /* display: none; */
      }
      .right-side{
        h1{
          margin-left: 150px;
          /* text-align: center; */
        }
        width: 100%;
        height: 100%;
        form{
         /* background: red;  */
          width: 75%;
          margin-left: 75px;
          /* width: 50%; */
        }
        form .cadastro-2 {
          .flex-row.first .item{
            width: 100%;
            input{
              width: 100%;
            }    
          }
          .flex-row.second{
             .item:first-child {
              margin-right: 50px;
              } 
          }
        }
      .login{
        div{
          height: 85%;
        }
      }  
      }
    }
  }
  /* 843 -  758*/
  @media (max-width: 935px){
    .content{
      .left-side{
        display: none;
      }
      .right-side{
        /* h1{ text-align: center; margin: 0;} */
        form{
          margin: 0 auto;
          /* background: blue;  */
          width: 65%;
          /* width: 80%; */
        }
      } 
    }
  }
  /* 715 - 643 */
  @media (max-width: 806px){
    .content .right-side {
      form{
        width: 75%;
      }
        /* height: 130vh; */
    }
  }
  /* 500 - 555 655*/
  @media (max-width: 700px){
    height: auto;
    .content .right-side{
      /* background: red; */

      h1{ padding-top: 20px; text-align: center; margin: 0;}
      form{
        /* font-size: 12px; */
        width: 90%;
        /* height: 65%; */
      }
    }
  }

  /* #HomeBtn {} */
  .content {
    display: flex;
    flex: 0 0 50%;
    /* height: 100%; */
    min-height: 100%;
  }
  h1 {
    /* color: #e9ebea; */
    color: black;
    font-size: 1.75em;
    margin-left: 30px;
  }
  .left-side,
  .right-side {
    padding-top: 30px;

    position: relative;
  }
  .right-side {
    width: 65%;
    /* align-items: center; */
    background: #e9ebea;
    height: auto;
    min-height: 550px;
  }
  .left-side {
    width: 35%;
  }

  form {
    transform: scale(0.9);

    /* margin-top: 20px; */
    /* margin-top: 10px; */
    width: 45%;
    width: 55%;
    /* font-size: 14px; */
    /* min-height: 85%; */
    /* height: auto;  -0-0- */
    /* height: 85%; */
    /* min-height:  555px; */
    /* min-height:  255px; */
    margin-left: 100px;
    border-radius: 15px;
    background: black;
    color: black;
    color: white;

    nav {
      color: #e9ebea;
      border-radius: 15px 15px 0 0;
      width: 100%;
      height: 50px;
      background: black;
      display: flex;
      align-items: center;
      justify-content: space-around;
      button {
        width: 100%;
        height: 100%;
        border: 0;
        color: black;
        background: white;
        cursor: pointer;
        border-top: 1px solid black;
        border-right: 1px solid black;
      }
      button:first-child {
        border-radius: 15px 0 0 0;
      }
      button:last-child {
        border-radius: 0 15px 0 0;
      }
      button.active {
        color: #00c41f;
        background: black;
        border-top: 1px solid black;
        border-right: 1px solid black;
      }
    }
    .cadastro {
      display: flex;
      display: block;
      
     /* background: blue; */
      /* align-items: center; */
      margin: 0 auto;
      width: 80%;
      min-height: 514px;
      justify-content: space-around;
      input {
        border-radius: 5px;
        border: 1px solid white;
        background: black;
        color: white;
        &::placeholder {
          padding: 5px;
          color: grey;
        }
        &:focus {
          outline: 0px;
          border: 2px solid #00c41f;
        }
      }
    }
    button {
      &:focus {
        outline: 0px;
      }
    }
    .cadastro-1 {
      padding-top: 10px;
      padding-left: 25px;
      /* margin: 0 auto; */
     min-height: 489px;
      display: flex;
      flex-direction: column;
      /* height: 100%; */
      /* background: blue; */
      /* align-items: center; */
      justify-content: space-around;
      .cadContent{
        background: red;
        /* height: 100%; */
      }
      input {
        margin-top: 10px;
        height: 25px;
      }
      /* flex: 0 0 50%; */
      flex-wrap: wrap;

      .flex-row {
        display: flex;
        flex-wrap: wrap;
        label:first-child {
          margin-right: 10px;
        }
        .item:last-child{
          width: 143px;
        }
      }

      input[type="text"] {
        width: 90%;
      }
      input[type="email"] {
        width: 90%;
      }
      input[type="date"] {
        &::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }
        width: 100%;
      }

      #btnNext {
        width: 20%;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 70%;
        border: 2px solid #b3f700;
        border-radius: 5px;
        /* background: rgb(0, 196, 31); */
        padding: 3px 0;
        background: black;
        color: white;
        cursor: pointer;
        transition: ease 0.5s;
        &:hover{
          /* transform: scale(1.1); */
          filter: invert(1);
          transition: ease 0.5s;
        }
      }
    }

    .cadastro-2 {
      display: block;
      h2{
        padding-top: 10px;
        padding-left: 25px;
        padding-bottom: 25px;
      }
      .content{
        height: 90%;
        height: auto;
        justify-content: space-between; /* -- */
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
      }
    .item{
      margin-left: 20px;
      &#name input{
        width: 130%;
        width: 200px;
      }
      &#code input {
        width: 75px; 
      }
      &#validata input{
        width: 100px;
      }
      &#price{
        width: 100%;
        text-align: center;
        padding: 30px 0px;
      }
      &#plans{
        height: 74px;
        padding-bottom: 5px;
      }
      &#terms{
        margin-right: 25px;
        input{ margin-right: 5px;}
        display: flex;
        align-items: center;
      }
    }
      input {
        height: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .flag {
        border-radius: 5px;
        padding: 5px 10px;
        width: 110%;
        height: auto;
        background: rgb(179, 247, 0, 100%);
        background: rgb(255, 255, 255, 100%);
        display: flex;
        justify-content: space-between;
      }
      #flagOptions{
        width: 125px;
        z-index: 5;

        button{
          margin-top: 10px;
          cursor: pointer;
          width: 100%;
          height: 25px;
          border: 1px solid white;
          border-radius: 5px 5px 0 0;
          background: black;
          color: white;
          span{
            margin-left: 10px;
            svg{
              &.animadoOpen{
                animation-name: ${dropDownAnimation};
                animation-duration: 0.5s;
                animation-fill-mode: forwards;
              }
              &.animadoClose{
                animation-name: ${dropDownAnimationClose};
                animation-duration: 0.5s;
                animation-fill-mode: forwards;
              }
            }
          }
        }
        #options{
          &.animateFlagOpen{
            animation-name: ${flagAnimationOpen};
            animation-duration: 1s;
            animation-fill-mode: forwards;
          }
          &.animateFlagClose{
            animation-name: ${flagAnimationClose};
            animation-duration: 1s;
            animation-fill-mode: forwards;
          }
          overflow: hidden;
          transition: ease 1s;
          z-index: 2;
          position: absolute;
          padding-left: 10px;
          border-radius:  0 0 5px 5px;
          border: 1px solid black;
          border-top: 0px;
          width: 125px;
          height: 135px;
          background: black;
          background: white;
          display: none;
          box-shadow: 0px 2px 3px grey;
          /* display: flex; */
          flex-direction: column;
        }
        .option input{
          margin-right: 20px;
        }
      }

      .plans {
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 10px;
        z-index: 3;
        label#infoBtn{
           .infoOpen{
            animation-name: ${infoIconAnimation};
            animation-duration: 1s;
            transition: ease 1s;
            animation-fill-mode: forwards;
            }
            .infoClose{
            animation-name: ${infoIconAnimationBack};
            animation-duration: 1s;
            transition: ease 1s;
            animation-fill-mode: forwards;
            }
        }
        .animate{
          animation-name: ${infoAnimation};
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }
        .animateBack{
          animation-name: ${infoAnimationBack};
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }
        #infos{
          content: "";
          width: 25px;
          width: 0px;
          height: 5px;
          height: 0px;

          z-index: 2;
          left:  50%;
          position: absolute;
          overflow: hidden;
          border-radius: 10px;
          background: white;
          button{
            border-radius: 0px;
            width: calc(100% / 3);
            padding: 10px 0px;
     
            &:hover{
              border: 0px;
            }
           
          }
          #content{
            padding: 10px;
            p{
              color: green;
            }
            ul{
              transition: ease 2s;
            }
            ul li{
              color: black;
              transition: ease 2s;
              margin-left: 20px;
            }
          }
      }
        button {
          box-sizing: border-box;
          border: 0px;
          padding: 10px;
          background: white;
          cursor: pointer;
          transition: ease 0.5s;
          &:hover {
            color: white;
            background: black;
          }
          &:first-child {
            border-radius: 5px 0 0 5px;
          }
          &:nth-child(3) {
            border-radius: 0 5px 5px 0;
          }
        }
        #infoBtn {
          cursor: pointer;
          padding-left: 10px;
        }
        #info {
          border-radius: 50%;
          color: white;
          width: 15px;
          height: 15px;
          position: absolute;
          top: 5px;
          text-align: center;
          background: rgb(0, 99, 247);
        }
      }
      #confirmBtn{
        /* background: red; */
        width: 100%;
        /* margin: 0 auto; */
        margin: 0 25px;
        display: flex;
        align-items: center;
        margin-top: 10px;
      }
      button#confirm {
        /* width: 30%; */
        width: 125px;
        color: black;
        border: 0px solid white;
        padding: 15px;
        border-radius: 5px;
        background: #b3f700;
        margin: 0 auto;
        transition: ease 0.5s;
        cursor: pointer;
        filter: invert(0);
        &:hover {
          transform: scale(1.1);
          filter: invert(1);
          transition: ease 0.5s;
        }
      }
      button#PrevBtn {
        width: 65px;
        margin-bottom: 30px;
        border: 2px solid #b3f700;
        border-radius: 5px;
        padding: 3px 0;
        background: black;
        color: white;
        cursor: pointer;
        transition: ease 0.5s;
        &:hover{
          filter: invert(1);
          transition: ease 0.5s;
        }
      }
    }

    .login {
      /* height: 80%; */
      /* min-height: 440px; */
      min-height: 514px;
      background: white;
      /* background: black; */
      border-top: 1px solid transparent;
      border-left: 1px solid black;
      border-right: 1px solid black;
      text-align: center;
      overflow: hidden;
      border-radius: 0 0 15px 15px;
      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        /* margin-top: 20%; */
        background: black;
        border-top: 2px solid #00c41f;
        height: 100%;
        /* height: 414px; */
        /* border-radius: 0 0 15px 15px; */
        /* min-height: calc(514px - 20%); */
        .item{
          width: 100%;
          margin-top: 25px;
          margin-bottom: 25px;
          &.log{
            padding-top: 25px;
          }
        }
        img {
        width: 100px;
        height: 100px;
        margin-top: -60px;
        border-radius: 50%;
        border: 2px solid #00c41f;
        background: black;
        }
      }
      input {
        border: 1px solid #00c41f;
        width: 60%;
        border-radius: 5px;
        background: black;
        color: #e9ebea;
        height: 25px;
        text-align: center;
      }
      label:last-child {
        margin-top: 30px;
      }
      .log button {
        width: 30%;
        color: black;
        border: 0px solid white;
        padding: 10px;
        border-radius: 5px;
        background: #b3f700;
        margin: 0 auto;
        cursor: pointer;
        filter: invert(0);
        transition: ease 0.5s;
        &:hover {
          transform: scale(1.1);
          filter: invert(1);
          transition: ease 0.5s;
        }
      }
      .guestBtn{
        width: 100%;
        color: black;
        border: 0px solid white;
        padding: 5px;
        border-radius: 5px;
        background: #b3f700;
        margin: 0 auto;
        transition: ease 0.5s;
        margin-bottom: 10px;
        cursor: pointer;
        transition: ease 0.5s;
        &:hover {
          transform: scale(1.1);
          filter: invert(1);
          transition: ease 0.5s;
        }
      }
    }
    .cadastro {
      height: 90%;
      /* display: none; */
    }
    .cadastro-1 {
      /* display: none; */
    }
    .cadastro-2 {
      display: none;
    }
    .login {
      display: none;
    }
  }
  .left-side {
    background: url(${LoginBkg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: right 70%;
    .intro {
      padding-top: 70px;
      width: 80%;
      margin-left: 80px;
    }
    h3 {
      padding-bottom: 10px;
    }
    p {
      color: grey;
    }
  }
`;
  