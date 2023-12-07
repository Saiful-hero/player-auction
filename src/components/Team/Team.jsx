import React from "react";
import './Team.css';

const Team = (props) => {
    const {player, img, nationality} = props.team;

    return(
        <>
            <div className="item">
                <h3>{player}</h3>
                <img src={img} style={{height:'200px'}} alt="" />
                <p>Nationality: {nationality}</p>
            </div>

        </>
    )
}
export default Team;