import React from "react";
import Skill from "./Skill.js";
// import "./style.css";

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill='React' emoji='🤙' color='blue' />
      <Skill skill='JavaScript' emoji='🎗🎗' color='yellow' />
      <Skill skill='Web Design' emoji='🎲' color='green' />
      <Skill skill='Git and Github' emoji='🔔' color='brown' />
      <Skill skill='Sevelete' emoji='🎶' color='orangered' />
    </div>
  );
}
export default SkillList;
