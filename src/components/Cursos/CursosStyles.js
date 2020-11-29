import styled from "styled-components";
import { keyframes } from "styled-components";

const infoOn = keyframes`
    0%{height: 0px};
    100%{height: 125px;};
`;
const infoOff = keyframes`
    0%{height: 125px;};
    100%{height: 0px;};
`;

export const MyCursoss = styled.div`
    min-height: 100vh;
    height: auto;
    background: white;
    color: black;
    position: relative;
    @media (max-width: 600px){
        nav .nav-right{
            margin-bottom: 25px;
            &:after{
                display: none;
            }
        }
    }
    /* padding-bottom: 25px; */
    h1{
        font-size: 1.5em;
    }

    nav{
        /* padding-top: 15px; */
        display: flex;
        justify-content: space-between;
        .nav-left{
              #HomeBtn {           
                /* left: 15px;       */
            }
        }
        .nav-right{
            display: flex;
            align-items: flex-end;
            padding-top: 15px;
            padding-right: 30px;
            &:after{
                content: "";
                position: absolute;
                bottom: -15px;
                height: 1px;
                background: black;
                /* right: 0; */
                /* width: 105%; */
                width: 50%;
                margin-left: 25%;

            }
            .userInfo{
                display: flex;
                align-items: center;
                margin-right: 25px;
                font-size: 0.8em;
                /* height: 40px; */
                background:  #1D1D2C;
                color: #e9ebea;
                border-radius: 10px;
                padding: 5px 10px;
                img{
                    margin-right: 10px;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    border: 1px solid white;
                    /* background: green; */
                    /* visibility: hidden; */
                }
                svg{
                    margin-left: 5px;
                    transition: ease 1s;
                    transform: scale(.8);
                    &:hover{
                        /* filter: invert(1); */
                        transition: ease 1s;
                        transform: scale(1);
                    };
                }
            }
            .planInfo{
                display: flex;
                flex-direction: column;
                /* justify-content: center; */
                font-size: 0.8em;
                button{

                font-size: 0.8em;
                    cursor: pointer;
                    border-radius: 5px;
                    border:1px solid black;
                    background:  #d2ff00;
                    padding: 5px;
                    transition: ease 1s;
                    &:hover{
                        transform: scale(1.05);
                        transition: ease 1s;
                    }
                }
            }
        }


    }
    #content{
        height: auto;
        padding: 50px 0;
        width: 100%;
        background: #e9ebea;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;  
        position: relative;
        margin-top: 50px;

        #courses{
            width: 90%;
            /* border: 1px solid black; */
            box-sizing: border-box;
            height: auto;
            min-height: 450px;
            position: relative;
            display: flex;
            /* align-items: center; */
             /* ^aq pod tirar pra aumenta so p baix*/
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;
            .card{
                /* margin: 10px 0; */
                margin: 25px auto;
                /* margin-right: 15px; */
                overflow: hidden;
                width: 350px;
                width: 300px;
                width: 265px;
                /* width: 250px; */
                /* min-height: 400px; */
                min-height: 250px;
                height: auto;
                /* max-height: 200px; */
                border-radius: 15px;
                /* display: block; */
                &.soon{
                    /* &:before{
                        content: "Em Breve!";
                        text-align: center;
                        padding: 10px;
                        border-radius: 5px;
                        width: 100px;
                        background: #FF7700;
                        border: 0px;
                        top: 15px;
                        left: -10px;
                        top: 35px;
                        left: -5px;
                        color: white;
                        transform: rotate(-45deg);
                        position: absolute;

                        z-index: 2;
                    } */
                    .soonBtn{
                        padding: 8px;     
                        width: 75px;
                        margin-top: 10px;
                        margin-bottom: 15px;
                        background: #FF7700;
                        border: 0px;
                        color: white;
                        border-radius: 5px;
                        font-size: 0.78em;
                        margin-left: calc(50% - calc(75px / 2));
                        cursor: default;
                    }
                }
                .card-tittle{
                    width: 100%;
                    min-height: 60px;
                    /* min-height: 50px; */
                    /* height: 15%; */
                    display: flex;
                    align-items: center;
                    text-align: center;
                    justify-content: center;
                    font-size: 0.9em;
                    /* border-radius: 15px 15px 0 0; */
                    background-color: black;
                    color: white;
                }
                .visual{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    /* margin: 0 auto; */
                    min-height: 150px;
                    /* height: 55%; */
                    background: #d2ff00;
                    img{
                        max-width: 80%;
                    }
                }
                .description{
                    height: auto;
                    min-height: 139.844px;
                    font-size: 0.9em;
                    /* height: 30%; */
                    border-radius: 0 0 15px 15px; 
                    background: white;
                    /* background: blue; */
                    padding: 5px 10px;
                    position: relative;
                    button{cursor: pointer;}

                    .acessBtn{
                        padding: 8px;     
                        width: 65px;
                        font-size: 0.85em;
                        border-radius: 5px;
                        margin-top: 10px;
                        margin-bottom: 15px;
                        background: black;
                        color: white;
                        border: 2px solid #d2ff00;
                        transition: ease 1s; 
                        /* margin: 0 auto; */
                        margin-left: calc(50% - calc(65px / 2));
                        &:hover{
                            transform: scale(1.05);
                            transition: ease 1s; 
                            filter: invert(1);
                        }
                    }

                    .moreBtn{
                        cursor: pointer;
                        width: 25px;
                        height: 25px;
                        border: 0px solid black;
                        /* background: #60DAFA; */
                        background: #0EB5F3;
                        color: white;
                        outline: 0px;
                        /* font-weight: bold; */
                        transition: ease 1s; 
                        font-size: 1.4em;
                        /* margin-left: 90%; */
                        /* margin-top: 20%; */
                        /* margin-bottom: 5px; */
                        /* position: absolute; */
                        /* bottom: 20px; */
                        /* right: 20px; */
                        text-align: center; 
                        z-index: 2;
                        border-radius: 50%;
                        /* top: -25px; */
                        /* bottom: -5px; */
                        /* left: 90%; */
                        left: 25%;
                        &:hover{
                            transform: scale(1.1);
                            transition: ease 0.3s; 
                            /* border: 1px solid black; */
                            /* filter: invert(1); */
                        }
                    }
                }
                .informacoes{
                    display: none;
                    /* height: 0px; */
                    padding: 0 5px;
                    overflow: hidden;
                    /* padding-top: 20px; */
                    /* margin-top: 20px; */
                    /* border-top: 20px solid white; */
                    /* transition: ease 1s; */
                    &.infoAnimateOn{
                        animation-name: ${infoOn};
                        animation-duration: 1s;
                        animation-fill-mode: forwards;
                    }
                    &.infoAnimateOff{
                        animation-name: ${infoOff};
                        animation-duration: 1s;
                        animation-fill-mode: forwards;
                    }
                }
            }
        }
    }  
    footer{
        color: #e9ebea;
    }
`;