import React from 'react';
import styled from 'styled-components';

const StyledEpisodeCard = styled.div`
    border: 1px solid lightgrey;
    width: 45%;
    margin: 2%;
    padding: 20px;
    border-radius: 8px;
`; 

function EpisodeCard(props) {
    return (
        <StyledEpisodeCard>
            <h1>{props.episode.name}</h1>
            <h2>{props.episode.air_date}</h2>
            <h2>{props.episode.episode}</h2>
            <h2>{`Characters: ${props.episode.characters.length}`}</h2>
        </StyledEpisodeCard>
    );
}

export default EpisodeCard