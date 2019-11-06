import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/episode/`)
            .then((res) => {
                console.log(res.data.results)
                setEpisodes(res.data.results)
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            })
    }, [])

    return (
        <section className='episode-list grid-view'>
            {episodes.map((episode) => <EpisodeCard episode={episode} />)}
        </section>
    )
}

export default EpisodeList