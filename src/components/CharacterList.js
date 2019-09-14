import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
// import { tsPropertySignature } from "@babel/types";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        console.log(res.data.results)
        setCharList(res.data.results)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }, []);

  return (
    <section className="character-list grid-view">

      {charList.map((char) => <CharacterCard char={char}/>
      )}
    </section>
  );
}
