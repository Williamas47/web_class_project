import styled from "styled-components";

export const MyAsideBar = styled.aside`
  /* .asideContent{
    background: #1D1D2C;
    overflow-y: scroll;
    display: inline-block;

    display: flex;
    flex-direction: column;
    align-items: space-between;

  }
  .modulos{
    background: blue;
    .inputs{
      background: red;
    }
  } */

  ::-webkit-scrollbar {
    width: 8px;
    /* background: #e9ebea; */
}
  
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #00C41F; 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
       /* box-shadow: inset -10px 25px 25px black, inset -15px -25px 25px black; */
       box-shadow: inset -15px -25px 25px black;
       height: 100%;
       padding: 12px;

       width: 25%;
       /* width: 24%; */
       /* padding-right: 2%; */
       background: #1D1D2C;
       overflow-y: scroll;
       /* margin-right: 10px; */
       /* padding-right: 25px; */
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
       .section:last-child{
        padding-bottom: 24px;
       }
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
            input[type="radio"]:checked + span {
              color: rgb(38, 204, 38);
              font-size: 1em;
              transition-duration: 0.5s;
            }
          }
        }
      }

`;