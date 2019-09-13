import React from "react";

function CharacterCard(props) {
  // {console.log(props)}
  return (
    <div>
      <image src={props.char.image}/>
      <h1>{props.char.name}</h1>
      <h3>{`${props.char.species} ${props.char.status}`}</h3>
      <h3>{props.char.location}</h3>
      <h3>{props.char.origin}</h3>
      <h3>{props.char.episode}</h3>
    </div>);
}

export default CharacterCard