import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div `
  border: 1px solid lightgrey;
  border-radius: 8px;
  margin: 10px;
  text-align: center;
  
`;

function CharacterCard(props) {
  return (
    <StyledCard className='charCard'>
      <img src={props.char.image} alt={`${props.char.name} from Rick and Morty`}/>
      <h1>{props.char.name}</h1>
      <h3>{`${props.char.species} ${props.char.status}`}</h3>
      <h3>{props.char.location.name}</h3>
      <h3>{props.char.origin.name}</h3>
      <h3>{props.char.episode[0]}</h3>
    </StyledCard>);
}

export default CharacterCard