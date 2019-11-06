import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div `
  border: 1px solid lightgrey;
  border-radius: 8px;
  margin: 10px;
  text-align: center;
  width: 45%;
`;

function CharacterCard(props) {
  return (
    <StyledCard className='charCard'>
      <img src={props.char.image} alt={`${props.char.name} from Rick and Morty`}/>
      <h1>{`Name: ${props.char.name}`}</h1>
      <h3>{`Species: ${props.char.species}`}</h3>
      <h3>{`Status: ${props.char.status}`}</h3>
      <h3>{`Living in: ${props.char.location.name}`}</h3>
      <h3>{`Originally from: ${props.char.origin.name}`}</h3>
      <h3>{`In ${props.char.episode.length} Episode(s)`}</h3>
    </StyledCard>);
}

export default CharacterCard