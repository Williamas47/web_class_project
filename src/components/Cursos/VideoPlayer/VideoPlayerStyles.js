import styled from "styled-components";

export const MyVideoPlayer = styled.div `
    /* #right-side{ */
      height: 100%;
      width: 75%;
      display: flex;
      flex-direction: column;
      /* align-items: flex-start; */
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
      /* justify-content: space-around; */
      .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3{  
        color: #e9ebea;
        margin-left: 5%;
        top: 0;
        margin-top: 25px;
        margin-bottom: 25px;
        /* padding-bottom: 50px; */
          span{
            color:#00C41F; 
          }
        }
        /* #showAside{
          margin-right: 25px;
          width: 40px;
          height: 40px;
        } */
      }

      #player{
        /* margin-top: 25px; */
        height: 75%;
        margin: 0 5%;
        background: grey;
        /* margin: 0 auto; */
      }
      #commentsBtn{
        width: 125px;
        padding: 5px 10px;
        padding-left: 0px;
        background: transparent;
        /* background: red; */
        border: 0px;
        margin: 20px 5%;
        color: #e9ebea;
        svg{
          transform: scale(0.9);
          /* margin-left: 5px; */
        }
      }
      .bottom{
        /* background: red; */
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        label{ 
          color: #e9ebea;
          margin-right: 15px;
          font-size: 1em;
          /* border-radius: 5px; */
          padding: 5px;
          cursor:pointer;
          transition: ease 0.5s; 
        }
        input#like:checked + label{
          border-bottom: 3px solid #0EB5F3;
          color: #0EB5F3;
        }
        input#dislike:checked + label{
          border-bottom: 3px solid red;
          color: red;
        }
        input{
          display: none;
        }
        button{
          cursor: pointer;
        }
      }
    /* } */
` 
