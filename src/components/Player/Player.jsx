import React from "react";
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";

const Player = (props) => {
    const {player, img, nationality, type, base_price} = props.player;
    const handlePlusButton = props.handlePlusButton;
    // console.log(player);
    return(
        <>
            <div className="grid-item">
                <h3>{player}</h3>
                <img src={img} style={{height:'200px'}} alt="" />
                <p>nationality: {nationality}</p>
                <p>Type: {type}</p>
                <h3>Base Price: {base_price}</h3>
                {/* <button onClick={ () => handlePlusButton(props.player)}><FontAwesomeIcon icon={faPlus}/> Add </button> */}
                <Button  onClick={ () => handlePlusButton(props.player)} variant="success"><FontAwesomeIcon icon={faPlus}/>Add</Button>
            </div>
        </>
    );
};
export default Player