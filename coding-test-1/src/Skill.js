import React from "react";
import "./style.css";
function Skill({ skill, level, color }) {
  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" ? "💪" : level === "intermediate" ? "👍" : "👶"}
      </span>
    </div>
  );
}

export default Skill;
