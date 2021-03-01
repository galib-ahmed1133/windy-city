import React from 'react';
import './ShowPlay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
const ShowPlayer = (props) => {
        const {name, img, currentTeam, height, salary} =props.player;
    return (
            <div className="card-style">
            <img src={img} alt=""/>
            <h2>{name}</h2> 
            <p>Current Team : {currentTeam}</p>
            <p>Height : {height}</p>
            <p>Salary : <big className="salary-color">{salary}</big></p>
            <button className="add-btn" onClick={ () => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faCheckCircle}/> Add Player</button>

            </div>
    );
};

export default ShowPlayer;