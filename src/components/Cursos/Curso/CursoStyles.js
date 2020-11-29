import styled from "styled-components";

export const MyCursos = styled.div`
  min-height: 100vh;
  background: white;
  color: black;
  @media (min-width: 1000px){
    .content #videoPlayer{
      height: 575px;
      /* #showAsideBtn{
       display: none;
      } */
      #aside{
        display: flex;
        position: static;
      }
    }
  }
  @media (max-width: 1000px){
    /* background: blue; */
    .content #videoPlayer{
      height: auto;
      flex-direction: column;
      /* #showAsideBtn{
       display: inline;
      } */
      #video{
        width: 100%;
        min-height: 575px;
        /* border-bottom: 3px solid white; */
        &:before{
          content: "";
          left: 10%;
          bottom: 0;
          /* width: 3px; */
          height: 3px;
          width: 80%;
          background: white;
          position: absolute;
          border-radius: 15px;
          margin: 0 auto;
       }
        #player{
          min-height: 430px;
        }
        &:after{
          display: none;
        }
      }
      #aside{
        /* display: block; */
        /* position: absolute; */
        padding: 0;
        width: 100%;
        /* height: 80%; */
        /* margin: 0 10%; */
        /* margin-top: 25px; */
        /* border-radius: 5px; */
        /* border: 3px solid  #3E3E3E; */
        /* box-shadow: 3px 3px 8px white; */
        /* box-shadow: 0px 0px 10px white; */

        ::-webkit-scrollbar {
          width: 0px;
        }


        .asideContent{
          ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background: #00C41F; 
          box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        }
          width: 100%;
          height: 550px;
          overflow-y: scroll;
          /* box-shadow: inset 0px 5px 15px green; */
          box-shadow: inset -8px 25px 25px black, inset -8px -25px 25px black;
          /* box-shadow: 0px 10px 5px #888, 0px -10px 5px #888; */
          /* display: flex;
          flex-wrap: wrap;
          gap: 25px;
          justify-content: space-around;
          justify-content: space-between;
          flex: 0 0 50%; */
          
          /* align-items: center; */
          margin: 0 auto;
          padding: 25px;
          /* text-align: center; */
          /* position: relative; */
          /* width: 33%; */
          /* background: blue; */
          .section{
            border-bottom: 1px solid #d2ff00;
            /* flex: 0 0 50%; */
            /* background: red; */
            padding: 10px;
            width: auto;
            height: auto;
            margin-bottom: 10px;
            /* min-width: 33%; */
              &:first-child{
                border-radius: 15px 15px 0 0 ;
                border-top: 3px solid #d2ff00;
              }
              &:last-child{
                border-radius:0 0 15px 15px;
              }
          }
        }

        /* margin-left: 100px; */
        /* margin: 0 auto; */
        /* margin: 20px auto; */
        /* background: red; */
     }
    }
  }
  nav{
    #HomeBtn{
      left: 65px;
    }
      a #backArrow {
      margin-top: 5px;
      margin-left: 10px;
      transition: ease 1s;
      transform: scale(0.8);
      &:hover {
        transition: ease 1s;
        transform: scale(1);
      }
    }
  }
  h1{
    margin-bottom: 20px;
  }
  .content{
    height: auto;
        padding: 50px 0;
        width: 100%;
        background: #e9ebea;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;  
        position: relative;
        margin-bottom: 50px;
        /* margin-top: 50px; */
    #videoPlayer{
      width: 90%;
     background:  #171731;
     /* border-radius: 15px; */
     border-radius: 15px 5px 5px 15px;
     /* height:90vh; */

     /* height: 575px; */

     /* display: block; */
     display: flex;
     align-items: center;
     /* justify-content: space-between; */
     overflow: hidden;
     /* padding: 5px; */
     /* #showAsideBtn{
      z-index: 2;
      cursor: pointer;
      margin-right: 25px;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 20px;
      right: 0px;
        } */
    #right-side{
      height: 100%;
      width: 75%;
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: center;
      justify-content: flex-start;
      &:after{
          content: "";
          right: 0;
          top: 10%;
          width: 3px;
          height: 80%;
          background: white;
          position: absolute;
          border-radius: 15px;
       }
      h3{  
        color: #e9ebea;
        margin-left: 5%;
        top: 0;
        margin-top: 25px;
        margin-bottom: 25px;
        span{
          color:#00C41F; 
        }
      }
      #video{
        /* height: 75%;
        margin: 0 5%;
        background: grey; */
        /* .bottom{ */
          /* p{ color: #e9ebea;} */
        /* } */
      }
      button{
        width: 125px;
        padding: 5px 10px;
        padding-left: 0px;
        background: transparent;
        border: 0px;
        margin: 20px 5%;
        color: #e9ebea;
        svg{
          transform: scale(0.9);
        }
      }
    }
     #asideBar{
       height: 100%;
       padding: 10px;
       width: 25%;
       background: #1D1D2C;
       overflow-y: scroll;

       /* &:before{
          content: "";
          left: 0;
          top: 10%;
          width: 3px;
          height: 80%;
          background: white;
          position: absolute;
          border-radius: 15px;
       } */
      .modulos{
        color:  #e9ebea;
        /* background: blue; */
        /* margin-bottom: 10px; */
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        gap: 5px;
        ul{
          padding: 5px 10px;
          display: flex;
          flex-direction: column;
          .inputs{
            display: flex;
            align-items: center;
          }
        }
      }
     }
    #commets{
      
    }
    }

  }
  footer{
      color: #e9ebea;
    }
`;