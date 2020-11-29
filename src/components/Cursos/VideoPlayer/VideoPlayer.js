import React from "react";
// import styles from "./VideoPlayer.module.css";
// import store from "../../../Store/index";
import { connect } from "react-redux";
import {MyVideoPlayer} from "./VideoPlayerStyles";
import SvgIcons from "../../SvgIcons";
const VideoPlayer = ({ curso, activeModule, activeLesson }) => {

  
  return (
    <MyVideoPlayer id="video">
      <section className="top">
        <h3>
          Module: <span>{activeModule}</span> 
        {" "}| Class: <span>{activeLesson}</span>
        </h3>
        {/* <button id="showAside">=</button> */}
      </section>
      <video id="player" controls></video>
      <div className="bottom">
        <button id="commentsBtn" onClick={()=> alert("Comments Avaliable Soon!")}>Comments <SvgIcons icon="DropDownArrow"/></button>
        {/* <p>Like Dislike</p> */}
        {/* <label> */}
        <div>
          <input type="radio" id="like" name="like"/>
          <label htmlFor ="like">Like</label>
          <input type="radio" id="dislike" name="like"/>
          <label htmlFor ="dislike">Dislike</label>
        </div>
          {/* Like */}
        {/* </label> */}
        {/* <label> */}
          {/* dislike */}
        {/* </label> */}
      </div>
    </MyVideoPlayer>
  );
};

export default connect((state) => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson,
}))(VideoPlayer);
// export default VideoPlayer;
