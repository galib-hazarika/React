import React from "react";
import Avatar from "./Avatar.js";
import Intro from "./Intro.js";
import SkillList from "./SkillList.js";
// import "./style.css";

function Card() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
export default Card;
