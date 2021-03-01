import React, { useEffect, useState } from "react";
import playerData from "../../data/mockData.json";
import ShowPlayer from "../ShowPlayers/ShowPlayer";
import Team from "../Team/Team";
import "./Player.css";

const Player = () => {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
  }, []);

  const [team, setTeam] = useState([]);

  const handleAddPlayer = (player) =>{
    //   console.log('added', player)
      const newTeam = [...team, player];
      setTeam(newTeam);
  }

  return (
    <div className="player-container">
      <div className="player-info">
        <div className="card-container">
            <div className="card">
            {player.map((player) => (
            <ShowPlayer player ={player} key={player.id} handleAddPlayer={handleAddPlayer}></ShowPlayer>
            ))}
            </div>
        </div>
      </div>
      <div className="selected-player">
                <Team team={team}></Team>
      </div>
    </div>
  );
};

export default Player;
