import { useEffect, useState } from 'react';

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);

  async function fetchPokemon() {
    try {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      console.log('response', response);
      let data = await response.json(); // parsing Javascript Object Notation
      console.log('data', data.results);

      // fetch details
      let detailedData = await Promise.all(
        data.results.map(async (poke) => {
          let res = await fetch(poke.url);
          return res.json();
        }),
      );

      setPokemon(detailedData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'flex-start',
        padding: '20px',
      }}
    >
      {pokemon.map((poke) => {
        console.log('poke', poke);
        return (
          <div
            style={{
              border: '1px solid black',
              padding: '15px',
              width: '150px',
              textAlign: 'center',
            }}
          >
            <img src={poke.sprites.front_default} alt={poke.name} />
            <h3>{poke.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Pokedex;
