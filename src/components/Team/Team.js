import React from "react";
import "./team.css";

const Team = (props) => {
  const team = props.team;
  let salary = team.reduce((salary, team) => salary = team.salary , 0);
  const totalPrice = team.reduce((total, team) => total + team.salary, 0);
  return (
    <div className="team">
      <h1>Team Selection</h1>
      <h3>Player Selected : {team.length}</h3>
      <h3 className="salary">Player Salary : {salary}</h3>
      <h3>Total Salary: {totalPrice}</h3>
    </div>
  );
};

export default Team;
