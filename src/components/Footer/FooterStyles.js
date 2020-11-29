import styled from "styled-components";

export const MyFooter = styled.footer`
  height: 10vh;
  background: black;
  background:  #1D1D2C;
  /* background:  #171731; */
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-top: 10px;
  div svg:not(:first-child) {
    margin-left: 10px;
  }
  p:first-child {
    font-size: 16px;
  }
  p:not(:first-child) {
    font-size: 1.14em;
  }
  div svg{
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
    }
  }
`;
