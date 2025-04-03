import { useState, useRef } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import MusicPlayer from './components/MusicPlayer';
import closedPokedex from './assets/pokedex-closed.png';

function App() {
  const [opened, setOpened] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState('');
  const musicRef = useRef();

  const fetchPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      const data = await res.json();
      setPokemon(data);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert('Pokémon não encontrado!');
    }
  };

  const handleOpen = () => {
    setOpened(true);
    musicRef.current?.startMusic();
  };

  return (
    <div className="app">
      <MusicPlayer ref={musicRef} />
      {!opened ? (
        <img
          src={closedPokedex}
          alt="Pokédex Fechada"
          className="pokedex-closed"
          onClick={handleOpen}
        />
      ) : (
        <Pokedex
          pokemon={pokemon}
          search={search}
          setSearch={setSearch}
          onSearch={fetchPokemon}
        />
      )}
    </div>
  );
}

export default App;
