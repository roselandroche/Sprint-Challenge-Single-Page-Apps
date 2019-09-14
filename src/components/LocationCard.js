import React from "react";
import styled from "styled-components";

const StyledLocationCard = styled.div`
  width: 45%;
  border: 1px solid lightgrey;
  border-radius: 8px;
  text-align: center;
  padding: 20px;
  margin: 2%;
`;

function LocationCard(props) {
  return (
    <StyledLocationCard>
      <h1>{props.location.name}</h1>
      <h2>{props.location.type}</h2>
      <h2>{props.location.dimension}</h2>
      <h2>{`Residents:${props.location.residents.length}`}</h2>
    </StyledLocationCard>
  );
}

export default LocationCard