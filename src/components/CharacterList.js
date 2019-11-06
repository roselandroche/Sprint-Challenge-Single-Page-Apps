import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
// import { tsPropertySignature } from "@babel/types";

export default function CharacterList() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
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
