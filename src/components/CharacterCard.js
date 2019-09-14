import React from "react";

function CharacterCard(props) {
  console.log(props)
  return (
    <div className='charCard'>
      <img src={props.char.image} alt={`Image of ${props.char.name}`}/>
      <h1>{props.char.name}</h1>
      <h3>{`${props.char.species} ${props.char.status}`}</h3>
      <h3>{props.char.location.name}</h3>
      <h3>{props.char.origin.name}</h3>
      <h3>{props.char.episode[0]}</h3>
    </div>);
}

export default CharacterCard